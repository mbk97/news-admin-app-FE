import apiClient from "./apiClient";

export const analyticsService = {
  getDashboardStats: () => apiClient.get("/analytics/dashboard"),

  getArticleStats: (params?: unknown) =>
    apiClient.get("/analytics/articles", { params }),

  getUserStats: () => apiClient.get("/analytics/users"),

  getActivityLogs: (params?: unknown) =>
    apiClient.get("/analytics/activity-logs", { params }),

  getTrendingArticles: () => apiClient.get("/analytics/trending"),
};
