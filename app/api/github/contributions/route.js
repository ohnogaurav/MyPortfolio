export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "ohnogaurav";

    if (!GITHUB_USERNAME) {
      return Response.json([]);
    }

    const headers = {
      Accept: "application/vnd.github+json",
    };

    if (GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
    }

    const res = await fetch(
      `https://api.github.com/search/issues?q=author:${GITHUB_USERNAME}+is:pr+is:public`,
      { headers, cache: "no-store" }
    );

    if (!res.ok) {
      return Response.json([]);
    }

    const data = await res.json();
    
    if (!data.items) {
      return Response.json([]);
    }

    const filtered = data.items.filter(item => {
      return item.pull_request && item.state === "closed" && (item.comments > 0 || (item.reactions && item.reactions.total_count > 0));
    }).slice(0, 5);

    const contributions = filtered.map(item => {
      const repoUrlParts = item.repository_url.split("/");
      const repoName = repoUrlParts.slice(-2).join("/");

      return {
        name: repoName,
        description: item.title,
        link: item.html_url,
        type: "PR"
      };
    });

    return Response.json(contributions);

  } catch (error) {
    return Response.json([]);
  }
}
