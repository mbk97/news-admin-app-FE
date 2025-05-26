import { useQuery } from "@tanstack/react-query";
import { analyticsService } from "../api/analyticsService";

const useAnalyticsData = (params?: { month?: number }) => {
  const getMontlyViews = useQuery({
    queryKey: ["monthly-views"],
    queryFn: async () => analyticsService.getMonthlyViews(),
  });

  const getTopPerformingNews = useQuery({
    queryKey: ["top-performing-news"],
    queryFn: async () => analyticsService.getTopPerformingNews(),
    select: (data) => data.data.data,
  });

  const getMonthlyCategoryViewsData = useQuery({
    queryKey: ["monthly-category-views", params?.month],
    queryFn: async () =>
      analyticsService.getMonthlyCategoryViews({
        month: params?.month,
        // year:params?.year
      }),
    select: (data) => data.data.data,
  });

  const getDashboardStatsData = useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: async () => analyticsService.getDashboardStats(),
    select: (data) => data.data.data,
  });

  return {
    getMontlyViews,
    getTopPerformingNews,
    getMonthlyCategoryViewsData,
    getDashboardStatsData,
  };
};

export { useAnalyticsData };
