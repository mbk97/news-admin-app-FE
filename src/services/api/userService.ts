import { GetUserActivitiesPayload } from "../../types/auth";
import apiClient from "./apiClient";

export interface IUserPayload {
  fullname: string;
  email: string;
  roleName: string;
}
interface IEditUserPayload {
  fullname: string;
  roleName: string;
}

export interface IAllUserRole {
  roleName: string;
}

export interface ICreateRolePayload {
  roleName: string;
}

export const userService = {
  getAllUsers: (params?: unknown) =>
    apiClient.get("/news-app-auth/users", { params }),
  getAllRoles: () => apiClient.get("/news-app-roles/roles"),
  getAllUsersUnderARole: (roleName: string) =>
    apiClient.get(`/news-app-roles/users-roles/${roleName}`),

  getUserById: (id: string) => apiClient.get(`/users/${id}`),

  createUser: (payload: IUserPayload) =>
    apiClient.post("/news-app-auth/register", payload),

  createRole: (payload: ICreateRolePayload) =>
    apiClient.post("/news-app-roles/create-role", payload),

  updateUser: (id: string, payload: IEditUserPayload) =>
    apiClient.put(`/news-app-auth/edit-user/${id}`, payload),

  modifyUserStatus: (id: string) =>
    apiClient.put(`/news-app-auth/modify-user-status/${id}`),

  getUserActivities: (payload: GetUserActivitiesPayload) =>
    apiClient.get(`/news-app-auth/activity-logs`, {
      params: payload,
    }),
};
