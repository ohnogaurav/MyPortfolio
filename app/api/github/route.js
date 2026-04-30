import { githubFallback } from "../../../data/portfolioData";;

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "alexrivera";

export async function GET() {
  try {
    if (!GITHUB_TOKEN) {
      return Response.json({ ...githubFallback, fallback: true });
    }

    const headers = {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
    };

    const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { headers });
    const userData = await userRes.json();

    const reposRes = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=stars&per_page=6&type=owner`,
      { headers }
    );
    const reposData = await reposRes.json();

    const totalStars = Array.isArray(reposData)
      ? reposData.reduce((acc, r) => acc + (r.stargazers_count || 0), 0)
      : 0;

    const featuredRepos = Array.isArray(reposData)
      ? reposData.slice(0, 3).map((r) => ({
          name: r.name,
          description: r.description || "",
          stars: r.stargazers_count || 0,
          forks: r.forks_count || 0,
          language: r.language || "—",
          link: r.html_url,
        }))
      : githubFallback.featuredRepos;

    return Response.json({
      username: userData.login,
      repos: userData.public_repos || githubFallback.repos,
      stars: totalStars || githubFallback.stars,
      followers: userData.followers || githubFallback.followers,
      featuredRepos,
    });
  } catch {
    return Response.json({ ...githubFallback, fallback: true });
  }
}
