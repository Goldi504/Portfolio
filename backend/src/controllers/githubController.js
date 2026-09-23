const githubService = require("../services/githubService");

// Get complete GitHub dashboard
const getGithubDashboard = async (req, res) => {
  try {
    const dashboard = await githubService.getGithubDashboard();

    res.status(200).json({
      success: true,
      data: dashboard,
    });
  } catch (error) {
    console.error("GitHub Dashboard Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch GitHub dashboard",
      error: error.message,
    });
  }
};

// Get GitHub profile
const getGithubProfile = async (req, res) => {
  try {
    const profile = await githubService.getGithubProfile();

    res.status(200).json({
      success: true,
      data: profile,
    });
  } catch (error) {
    console.error("GitHub Profile Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch GitHub profile",
      error: error.message,
    });
  }
};

// Get repositories
const getGithubRepositories = async (req, res) => {
  try {
    const repositories =
      await githubService.getGithubRepositories();

    res.status(200).json({
      success: true,
      count: repositories.length,
      data: repositories,
    });
  } catch (error) {
    console.error("GitHub Repository Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch GitHub repositories",
      error: error.message,
    });
  }
};

// Get languages
const getGithubLanguages = async (req, res) => {
  try {
    const languages =
      await githubService.getGithubLanguages();

    res.status(200).json({
      success: true,
      data: languages,
    });
  } catch (error) {
    console.error("GitHub Languages Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch GitHub languages",
      error: error.message,
    });
  }
};

module.exports = {
  getGithubDashboard,
  getGithubProfile,
  getGithubRepositories,
  getGithubLanguages,
};