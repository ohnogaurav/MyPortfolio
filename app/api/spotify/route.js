export const dynamic = "force-dynamic";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

const TOKEN_URL = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_URL = "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_URL = "https://api.spotify.com/v1/me/player/recently-played?limit=1";

async function getAccessToken() {
  const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");
  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: REFRESH_TOKEN,
    }),
  });
  return res.json();
}

async function fetchWithRetry(url, access_token) {
  let res = await fetch(url, {
    headers: { Authorization: `Bearer ${access_token}` },
    cache: "no-store"
  });

  // If token expired → retry once with new token
  if (res.status === 401) {
    const { access_token: newToken } = await getAccessToken();
    res = await fetch(url, {
      headers: { Authorization: `Bearer ${newToken}` },
      cache: "no-store"
    });
  }

  return res;
}

export async function GET(request) {
  try {
    if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
      return Response.json({ isPlaying: false, error: "Spotify not configured" });
    }

    const { access_token } = await getAccessToken();
    const res = await fetchWithRetry(NOW_PLAYING_URL, access_token);

    if (res.status === 204 || res.status > 400) {
      // fallback to recently played
      const recentRes = await fetchWithRetry(RECENTLY_PLAYED_URL, access_token);
      const recentData = await recentRes.json();

      if (recentData.error) {
        return Response.json({ isPlaying: false });
      }

      if (!recentData.items || recentData.items.length === 0) {
        return Response.json({ isPlaying: false });
      }

      const track = recentData.items[0].track;

      return Response.json({
        isPlaying: false,
        title: track.name,
        artist: track.artists.map(a => a.name).join(", "),
        album: track.album.name,
        albumArt: track.album.images?.[2]?.url ?? null,
        songUrl: track.external_urls.spotify
      });
    }

    const data = await res.json();

    if (!data.item) {
      // fallback to recently played
      const recentRes = await fetchWithRetry(RECENTLY_PLAYED_URL, access_token);
      const recentData = await recentRes.json();

      if (recentData.error) {
        return Response.json({ isPlaying: false });
      }

      if (!recentData.items || recentData.items.length === 0) {
        return Response.json({ isPlaying: false });
      }

      const track = recentData.items[0].track;

      return Response.json({
        isPlaying: false,
        title: track.name,
        artist: track.artists.map(a => a.name).join(", "),
        album: track.album.name,
        albumArt: track.album.images?.[2]?.url ?? null,
        songUrl: track.external_urls.spotify
      });
    }

    return Response.json({
      isPlaying: data.is_playing,
      title: data.item.name,
      artist: data.item.artists.map((a) => a.name).join(", "),
      album: data.item.album.name,
      albumArt: data.item.album.images?.[2]?.url ?? null,
      songUrl: data.item.external_urls.spotify,
    });
  } catch {
    return Response.json({ isPlaying: false, error: "Failed to fetch" });
  }
}
