export const dynamic = "force-dynamic";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

const TOKEN_URL = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_URL = "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_URL = "https://api.spotify.com/v1/me/player/recently-played?limit=1";

// Persistent memory across requests
if (!globalThis.spotifyCache) {
  globalThis.spotifyCache = {
    isPlaying: false,
    title: "Nothing played recently",
    artist: "",
    album: "",
    albumArt: null,
    songUrl: "#"
  };
}

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

  // retry once if token expired
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
      return Response.json(globalThis.spotifyCache);
    }

    const { access_token } = await getAccessToken();

    // 1. Try Now Playing
    const nowPlayingRes = await fetchWithRetry(NOW_PLAYING_URL, access_token);

    if (nowPlayingRes.status === 200) {
      const data = await nowPlayingRes.json();

      if (data.item) {
        globalThis.spotifyCache = {
          isPlaying: data.is_playing,
          title: data.item.name,
          artist: data.item.artists.map((a) => a.name).join(", "),
          album: data.item.album.name,
          albumArt: data.item.album.images?.[2]?.url ?? null,
          songUrl: data.item.external_urls.spotify,
        };
        return Response.json(globalThis.spotifyCache);
      }
    }

    // 2. Fallback conditions (204, >400, or no item)
    if (
      nowPlayingRes.status === 204 ||
      nowPlayingRes.status > 400
    ) {
      const recentRes = await fetchWithRetry(RECENTLY_PLAYED_URL, access_token);
      const recentData = await recentRes.json();

      if (!recentData.error && recentData.items && recentData.items.length > 0) {
        const track = recentData.items[0].track;

        globalThis.spotifyCache = {
          isPlaying: false,
          title: track.name,
          artist: track.artists.map(a => a.name).join(", "),
          album: track.album.name,
          albumArt: track.album.images?.[2]?.url ?? null,
          songUrl: track.external_urls.spotify
        };

        return Response.json(globalThis.spotifyCache);
      }

      return Response.json(globalThis.spotifyCache);
    }

    // 3. Final fallback (no item case)
    const recentRes = await fetchWithRetry(RECENTLY_PLAYED_URL, access_token);
    const recentData = await recentRes.json();

    if (!recentData.error && recentData.items && recentData.items.length > 0) {
      const track = recentData.items[0].track;

      globalThis.spotifyCache = {
        isPlaying: false,
        title: track.name,
        artist: track.artists.map(a => a.name).join(", "),
        album: track.album.name,
        albumArt: track.album.images?.[2]?.url ?? null,
        songUrl: track.external_urls.spotify
      };

      return Response.json(globalThis.spotifyCache);
    }

    // 4. Return cached if everything fails
    return Response.json(globalThis.spotifyCache);

  } catch (error) {
    return Response.json(globalThis.spotifyCache);
  }
}