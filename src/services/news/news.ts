import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ICreateNewsPayload, newsService } from "../api/newsService";
import { useToast } from "../../hooks/useToast";
import { getCustomErrorMessage } from "../../utils/error";
import { IfilterNewsPayload } from "../../types/news";

interface IProps {
  handleClose?: () => void;
  filterParamsForNews?: IfilterNewsPayload;
}

const useNews = ({ handleClose, filterParamsForNews }: IProps) => {
  const { toastError, toastSuccess } = useToast();
  const queryClient = useQueryClient();

  const createNewsMutation = useMutation({
    mutationFn: (payload: ICreateNewsPayload) =>
      newsService.createNews(payload),
    onSuccess(data) {
      toastSuccess(data.data.message);
      handleClose?.();
      fetchAllAvailableNews.refetch();
    },
    onError(error) {
      const errorMsg = getCustomErrorMessage(error);
      toastError(errorMsg);
    },
  });

  const fetchAllAvailableNews = useQuery({
    queryKey: ["allNews", filterParamsForNews],
    queryFn: () => newsService.getAllNews(filterParamsForNews!),
    select(data) {
      return data.data;
    },
  });

  const getRecentNewsForDashboard = useQuery({
    queryKey: ["recentNews"],
    queryFn: () => newsService.getRecentNews(),
    select(data) {
      return data.data.data;
    },
  });

  const publishNews = useMutation({
    mutationFn: (id: string) => newsService.publishNews(id),
    onSuccess(data) {
      toastSuccess(data.data.message);
      handleClose?.();
      queryClient.invalidateQueries(["allNews"] as never);
    },
    onError(error) {
      const errorMsg = getCustomErrorMessage(error);
      toastError(errorMsg);
    },
  });

  const deleteNews = useMutation({
    mutationFn: (id: string) => newsService.deleteNews(id),
    onSuccess(data) {
      toastSuccess(data.data.message);
      handleClose?.();
      fetchAllAvailableNews.refetch();
    },
    onError(error) {
      const errorMsg = getCustomErrorMessage(error);
      toastError(errorMsg);
    },
  });

  const updateNews = useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: string;
      payload: ICreateNewsPayload;
    }) => newsService.updateNews(id, payload),
    onSuccess(data) {
      toastSuccess(data.data.message);
      handleClose?.();
      fetchAllAvailableNews.refetch();
    },
    onError(error) {
      const errorMsg = getCustomErrorMessage(error);
      toastError(errorMsg);
    },
  });

  return {
    createNewsMutation,
    fetchAllAvailableNews,
    publishNews,
    getRecentNewsForDashboard,
    deleteNews,
    updateNews,
  };
};

export { useNews };
