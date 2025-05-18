import apiClient from "./apiClient";

export interface IUserPayload {
  fullname: string;
  email: string;
  roleName: string;
}

export interface IAllUserRole {
  roleName: string;
}

export const userService = {
  getAllUsers: (params?: unknown) => apiClient.get("/users", { params }),

  getAllRoles: () => apiClient.get("/news-app-roles/roles"),
  getAllUsersUnderARole: (payload: unknown) =>
    apiClient.get("/news-app-roles/users-roles", { params: payload }),

  getUserById: (id: string) => apiClient.get(`/users/${id}`),

  createUser: (payload: IUserPayload) =>
    apiClient.post("/news-app-auth/register", payload),

  updateUser: (id: string, payload: Partial<IUserPayload>) =>
    apiClient.put(`/users/${id}`, payload),

  deleteUser: (id: string) => apiClient.delete(`/users/${id}`),
};
