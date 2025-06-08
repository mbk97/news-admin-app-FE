import { IfilterNewsPayload } from "../../types/news";
import apiClient from "./apiClient";

export interface ICreateNewsPayload {
  _id?: string;
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
  updateNews: (id: string, payload: ICreateNewsPayload) =>
    apiClient.put(`/news-app/${id}`, payload),
  getAllNews: (filterParamsForNews: IfilterNewsPayload) =>
    apiClient.get("/news-app", {
      params: filterParamsForNews,
    }),
  publishNews: (id: string) => apiClient.put(`/news-app/publish/${id}`),
  deleteNews: (id: string) => apiClient.delete(`/news-app/${id}`),
};
