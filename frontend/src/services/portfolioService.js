import api from "./api";

export const getProjects = async () => {
  const response = await api.get("/projects");
  return response.data;
};

export const getSkills = async () => {
  const response = await api.get("/skills");
  return response.data;
};

export const getExperience = async () => {
  const response = await api.get("/experience");
  return response.data;
};

export const getEducation = async () => {
  const response = await api.get("/education");
  return response.data;
};

export const sendContactMessage = async (data) => {
  const response = await api.post("/contact", data);
  return response.data;
};