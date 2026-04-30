const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

const TOKEN_URL = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_URL = "https://api.spotify.com/v1/me/player/currently-playing";

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

export async function GET() {
  try {
    if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
      return Response.json({ isPlaying: false, error: "Spotify not configured" });
    }

    const { access_token } = await getAccessToken();
    const res = await fetch(NOW_PLAYING_URL, {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    if (res.status === 204 || res.status > 400) {
      return Response.json({ isPlaying: false });
    }

    const data = await res.json();

    if (!data.item) {
      return Response.json({ isPlaying: false });
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
