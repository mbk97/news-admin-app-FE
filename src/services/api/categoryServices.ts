import apiClient from "./apiClient";

export interface ICreateCategoriesPayload {
  categoryName: string;
}

export const categoryService = {
  getCategories: () => apiClient.get("/news-app-category"),
  createCategories: (payload: ICreateCategoriesPayload) =>
    apiClient.post("/news-app-category", payload),
  deleteCategory: (id: string) => apiClient.delete(`/news-app-category/${id}`),
};
