import apiClient from "./apiClient";

export interface ICreateNewsPayload {
  newsTitle: string;
  newsBody: string;
  category: string;
  newsImage?: string;
  createdBy: string;
  publish?: boolean;
}

export const newsService = {
  getRecentNews: () => apiClient.get("/news-app/recent-news"),
  createNews: (payload: ICreateNewsPayload) =>
    apiClient.post("/news-app/create", payload),
  getAllNews: () => apiClient.get("/news-app"),
  publishNews: (id: string) => apiClient.put(`/news-app/publish/${id}`),
  deleteNews: (id: string) => apiClient.delete(`/news-app/${id}`),
};
