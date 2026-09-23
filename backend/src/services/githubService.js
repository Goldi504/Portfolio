const axios = require("axios");

const githubAPI = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  },
});

const username = process.env.GITHUB_USERNAME;

const getGithubProfile = async () => {
  const response = await githubAPI.get(`/users/${username}`);
  return response.data;
};

const getGithubRepositories = async () => {
  const response = await githubAPI.get(`/users/${username}/repos`, {
    params: {
      sort: "updated",
      direction: "desc",
      per_page: 100,
    },
  });

  return response.data;
};

const getGithubLanguages = async () => {
  const repositories = await getGithubRepositories();

  const languageCount = {};

  repositories.forEach((repo) => {
    if (repo.language) {
      languageCount[repo.language] =
        (languageCount[repo.language] || 0) + 1;
    }
  });

  return Object.entries(languageCount)
    .map(([language, count]) => ({
      language,
      count,
    }))
    .sort((a, b) => b.count - a.count);
};

const getGithubDashboard = async () => {
  const [profile, repositories, languages] =
    await Promise.all([
      getGithubProfile(),
      getGithubRepositories(),
      getGithubLanguages(),
    ]);

  return {
    profile,
    repositories,
    languages,
    statistics: {
      repositories: repositories.length,
      publicRepositories: profile.public_repos || 0,
      commits: null,
    },
  };
};

module.exports = {
  getGithubDashboard,
  getGithubProfile,
  getGithubRepositories,
  getGithubLanguages,
};