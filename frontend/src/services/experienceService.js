import api from "./api";

export const getExperience = async () => {
  const response = await api.get("/experience");
  return response.data;
};