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
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
      { headers }
    );
    const reposData = await reposRes.json();

    const totalStars = Array.isArray(reposData)
      ? reposData.reduce((acc, r) => acc + (r.stargazers_count || 0), 0)
      : githubFallback.stars;

    const CUSTOM_REPOS = [
      {
        repoName: "DineIQ",
        displayName: "DineIQ",
        description: "AI-powered food waste reduction system using behavioral incentives to promote sustainable consumption patterns."
      },
      {
        repoName: "EduTrackCapstone",
        displayName: "EduTrack",
        description: "Geolocation and liveness-based attendance system preventing proxy marking with real-time tracking and validation."
      },
      {
        repoName: "Personalised-RAG-LLM-ChatBot",
        displayName: "Anubodh",
        description: "Context-aware AI chatbot with persistent memory, retrieval pipelines, and personalized responses via Gemini API."
      }
    ];

    const featuredRepos = Array.isArray(reposData)
      ? CUSTOM_REPOS.map((cr) => {
          const found = reposData.find((r) => r.name.toLowerCase() === cr.repoName.toLowerCase());
          if (found) {
            return {
              name: cr.displayName,
              description: cr.description,
              stars: found.stargazers_count || 0,
              forks: found.forks_count || 0,
              language: found.language || "—",
              link: found.html_url || `https://github.com/${GITHUB_USERNAME}/${cr.repoName}`,
            };
          }
          // If not found in fetched list, try to match by displayName in fallback data, otherwise return a default object
          const fallbackMatch = githubFallback.featuredRepos.find(
            (fr) => fr.name.toLowerCase() === cr.displayName.toLowerCase()
          );
          return fallbackMatch || {
            name: cr.displayName,
            description: cr.description,
            stars: 0,
            forks: 0,
            language: "—",
            link: `https://github.com/${GITHUB_USERNAME}/${cr.repoName}`,
          };
        })
      : githubFallback.featuredRepos;

    return Response.json({
      username: userData.login || GITHUB_USERNAME,
      repos: userData.public_repos || githubFallback.repos,
      stars: totalStars || githubFallback.stars,
      followers: userData.followers || githubFallback.followers,
      featuredRepos,
    });
  } catch {
    return Response.json({ ...githubFallback, fallback: true });
  }
}
