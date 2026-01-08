import { api } from "./api";

export const loginApi = async (data: { email: string; password: string }) => {
  const res = await api.post("/auth/login", data);
  return res.data;
};

export const signupApi = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  const res = await api.post("/auth/signup", data);
  return res.data;
};

export const getMeApi = async () => {
  const res = await api.get("/auth/me");
  return res.data;
};

export const logoutApi = async () => {
  const res = await api.post("/auth/logout");
  return res.data;
};
