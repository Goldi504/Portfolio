const express = require("express");

const {
  getGithubDashboard,
  getGithubProfile,
  getGithubRepositories,
  getGithubLanguages,
} = require("../controllers/githubController");

const router = express.Router();

router.get("/dashboard", getGithubDashboard);

router.get("/profile", getGithubProfile);

router.get("/repositories", getGithubRepositories);

router.get("/languages", getGithubLanguages);

module.exports = router;