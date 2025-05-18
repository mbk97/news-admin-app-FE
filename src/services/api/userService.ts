import apiClient from "./apiClient";

export interface IUserPayload {
  fullName: string;
  email: string;
  role: string;
  password?: string;
}

export const userService = {
  getAllUsers: (params?: unknown) => apiClient.get("/users", { params }),

  getUserById: (id: string) => apiClient.get(`/users/${id}`),

  createUser: (payload: IUserPayload) => apiClient.post("/users", payload),

  updateUser: (id: string, payload: Partial<IUserPayload>) =>
    apiClient.put(`/users/${id}`, payload),

  deleteUser: (id: string) => apiClient.delete(`/users/${id}`),
};
