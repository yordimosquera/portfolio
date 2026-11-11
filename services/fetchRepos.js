const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "yordimosquera";

export const githubProfileUrl = `https://github.com/${GITHUB_USERNAME}`;

// Returns the user's public, non-fork repos sorted by last update,
// or null when GitHub can't be reached (e.g. rate limit).
export const fetchRepos = async () => {
  const headers = { Accept: "application/vnd.github+json" };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?type=owner&sort=updated&per_page=100`,
      { headers }
    );
    if (!res.ok) {
      console.error(`GitHub repos request failed: ${res.status}`);
      return null;
    }
    const repos = await res.json();
    return repos
      .filter((repo) => !repo.fork)
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        language: repo.language,
        stars: repo.stargazers_count,
        updatedAt: repo.pushed_at ?? repo.updated_at,
      }));
  } catch (error) {
    console.error("GitHub repos request failed", error);
    return null;
  }
};
