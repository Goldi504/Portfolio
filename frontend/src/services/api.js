import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// ============================================
// PROJECT API
// ============================================

export const projectAPI = {
  getAll: () => api.get("/projects"),
};

// ============================================
// SKILL API
// ============================================

export const skillAPI = {
  getAll: () => api.get("/skills"),
};

// ============================================
// EXPERIENCE API
// ============================================

export const experienceAPI = {
  getAll: () => api.get("/experience"),
};

// ============================================
// EDUCATION API
// ============================================

export const educationAPI = {
  getAll: () => api.get("/education"),
};

// ============================================
// GITHUB API
// ============================================

export const githubAPI = {
  getDashboard: () => api.get("/github/dashboard"),

  getProfile: () => api.get("/github/profile"),

  getRepositories: () => api.get("/github/repositories"),

  getLanguages: () => api.get("/github/languages"),
};

// ============================================
// CONTACT API
// ============================================

export const contactAPI = {
  sendMessage: (data) => api.post("/contact", data),
};

export default api;