import api from "./api";

const githubService = {
  getDashboard: async () => {
    const response = await api.get("/github/dashboard");
    return response.data;
  },

  getProfile: async () => {
    const response = await api.get("/github/profile");
    return response.data;
  },

  getRepositories: async () => {
    const response = await api.get("/github/repositories");
    return response.data;
  },

  getLanguages: async () => {
    const response = await api.get("/github/languages");
    return response.data;
  },
};

export default githubService;