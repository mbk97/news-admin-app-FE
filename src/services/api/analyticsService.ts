import apiClient from "./apiClient";

interface MonthlyViewsParams {
  year?: number;
  month?: number;
}

export const analyticsService = {
  getMonthlyViews: () => apiClient.get("/news-app/monthly-views"),

  getTopPerformingNews: () => apiClient.get("/news-app/top-performing-news"),

  getDashboardStats: () => apiClient.get("/news-app/dashboard-data"),

  getMonthlyCategoryViews: (params?: MonthlyViewsParams) =>
    apiClient.get("/news-app/monthly-category-views", { params }),

  getTrendingArticles: () => apiClient.get("/analytics/trending"),
};
