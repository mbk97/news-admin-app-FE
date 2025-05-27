import apiClient from "./apiClient";

export interface IArticlePayload {
  title: string;
  content: string;
  category: string;
  imageUrl?: string;
  author: string;
}

export const articlesService = {
  getAllArticles: (params?: unknown) => apiClient.get("/articles", { params }),

  getArticleById: (id: string) => apiClient.get(`/articles/${id}`),

  createArticle: (payload: IArticlePayload) =>
    apiClient.post("/articles", payload),

  updateArticle: (id: string, payload: Partial<IArticlePayload>) =>
    apiClient.put(`/articles/${id}`, payload),

  deleteArticle: (id: string) => apiClient.delete(`/articles/${id}`),

  publishArticle: (id: string) => apiClient.post(`/articles/${id}/publish`),
};
