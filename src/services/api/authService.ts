import {
  ILoginPayload,
  IResetPayload,
  IUpdatePassword,
} from "../../types/auth";
import apiClient from "./apiClient";

export const authService = {
  login: (payload: ILoginPayload) =>
    apiClient.post("/news-app-auth/login", payload),

  forgotPassword: (email: string) =>
    apiClient.post("/news-app-auth/reset-password", { email }),

  updatePassword: (payload: IUpdatePassword) =>
    apiClient.post("/news-app-auth/change-password", payload),

  resetPassword: (payload: IResetPayload) =>
    apiClient.post(`/news-app-auth/reset-password/${payload.token}`, {
      password: payload.password,
    }),

  logout: () => apiClient.post("/news-app-auth/logout"),
};
