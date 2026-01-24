import axios from "axios";
import { authApi } from "./authApi";
import { getCookie } from "@/lib/getCookie";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const csrfToken = getCookie("csrfToken");
  if (csrfToken) {
    config.headers["x-csrf-token"] = csrfToken;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest = err.config;

    const isAuthRoute = originalRequest.url?.includes("/auth");

    if (
      err.response?.status === 401 &&
      !originalRequest._retry &&
      !isAuthRoute
    ) {
      originalRequest._retry = true;

      try {
        await authApi.post("/auth/refresh");
        return api(originalRequest);
      } catch {
        window.location.href = "/auth/login";
      }
    }

    return Promise.reject(err);
  },
);
