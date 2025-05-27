import { ILoginPayload, IUpdatePassword } from "../../types/auth";
import apiClient from "./apiClient";

export const authService = {
  login: (payload: ILoginPayload) =>
    apiClient.post("/news-app-auth/login", payload),

  forgotPassword: (email: string) =>
    apiClient.post("/news-app-auth/reset-password", { email }),

  updatePassword: (payload: IUpdatePassword) =>
    apiClient.post("/news-app-auth/change-password", payload),

  logout: () => apiClient.post("/news-app-auth/logout"),
};
