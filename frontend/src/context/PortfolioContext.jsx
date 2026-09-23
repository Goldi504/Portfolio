import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  projectAPI,
  skillAPI,
  experienceAPI,
  educationAPI,
  githubAPI,
} from "../services/api";

const PortfolioContext = createContext(null);

export const PortfolioProvider = ({ children }) => {
  // =========================================
  // PORTFOLIO DATA
  // =========================================

  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([]);

  // =========================================
  // GITHUB DATA
  // =========================================

  const [github, setGithub] = useState({
    dashboard: null,
    profile: null,
    repositories: [],
    languages: [],
  });

  const [githubLoading, setGithubLoading] = useState(false);
  const [githubError, setGithubError] = useState("");

  // =========================================
  // GLOBAL LOADING / ERROR
  // =========================================

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // =========================================
  // LOAD PORTFOLIO DATA
  // =========================================

  const loadPortfolioData = async () => {
    try {
      setLoading(true);
      setError(null);

      const [
        projectsResponse,
        skillsResponse,
        experienceResponse,
        educationResponse,
      ] = await Promise.all([
        projectAPI.getAll(),
        skillAPI.getAll(),
        experienceAPI.getAll(),
        educationAPI.getAll(),
      ]);

      // =====================================
      // PROJECTS
      // =====================================

      setProjects(
        projectsResponse.data?.data ||
          projectsResponse.data?.projects ||
          []
      );

      // =====================================
      // SKILLS
      // =====================================

      setSkills(
        skillsResponse.data?.data ||
          skillsResponse.data?.skills ||
          []
      );

      // =====================================
      // EXPERIENCE
      // =====================================

      setExperiences(
        experienceResponse.data?.data ||
          experienceResponse.data?.experiences ||
          []
      );

      // =====================================
      // EDUCATION
      // =====================================

      setEducation(
        educationResponse.data?.data ||
          educationResponse.data?.education ||
          []
      );
    } catch (err) {
      console.error(
        "Portfolio API Error:",
        err.response?.data || err.message
      );

      setError(
        err.response?.data?.message ||
          "Unable to load portfolio data."
      );
    } finally {
      setLoading(false);
    }
  };

  // =========================================
  // LOAD GITHUB DATA
  // =========================================

  const fetchGithubDashboard = async () => {
    try {
      setGithubLoading(true);
      setGithubError("");

      const [
        dashboardResponse,
        profileResponse,
        repositoriesResponse,
        languagesResponse,
      ] = await Promise.all([
        githubAPI.getDashboard(),
        githubAPI.getProfile(),
        githubAPI.getRepositories(),
        githubAPI.getLanguages(),
      ]);

      setGithub({
        dashboard:
          dashboardResponse.data?.data || null,

        profile:
          profileResponse.data?.data || null,

        repositories:
          repositoriesResponse.data?.data || [],

        languages:
          languagesResponse.data?.data || [],
      });
    } catch (err) {
      console.error(
        "GitHub API Error:",
        err.response?.data || err.message
      );

      setGithubError(
        err.response?.data?.message ||
          "Unable to load GitHub data."
      );

      // GitHub failure should not break portfolio
      setGithub({
        dashboard: null,
        profile: null,
        repositories: [],
        languages: [],
      });
    } finally {
      setGithubLoading(false);
    }
  };

  // =========================================
  // INITIAL PORTFOLIO LOAD
  // =========================================

  useEffect(() => {
    loadPortfolioData();
  }, []);

  // =========================================
  // CONTEXT VALUE
  // =========================================

  return (
    <PortfolioContext.Provider
      value={{
        // Portfolio
        projects,
        skills,
        experiences,
        education,

        // GitHub
        github,
        githubLoading,
        githubError,
        fetchGithubDashboard,

        // Global
        loading,
        error,

        // Refresh
        refreshPortfolio: loadPortfolioData,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

// =========================================
// CUSTOM HOOK
// =========================================

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);

  if (!context) {
    throw new Error(
      "usePortfolio must be used inside PortfolioProvider"
    );
  }

  return context;
};

export default PortfolioContext;