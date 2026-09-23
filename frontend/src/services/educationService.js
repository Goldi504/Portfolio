import api from "./api";

export const getEducation = async () => {
  const response = await api.get("/education");
  return response.data;
};