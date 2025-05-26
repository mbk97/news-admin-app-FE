import {
  categoryService,
  ICreateCategoriesPayload,
} from "../api/categoryServices";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCustomErrorMessage } from "../../utils/error";
import { useToast } from "../../hooks/useToast";

const useCategoryManagement = () => {
  const { toastError, toastSuccess } = useToast();

  const createCategory = useMutation({
    mutationFn: async (payload: ICreateCategoriesPayload) => {
      return await categoryService.createCategories(payload);
    },
    onSuccess(data) {
      toastSuccess(data.data.message);
      getCategories.refetch();
    },
    onError(error) {
      const errorMsg = getCustomErrorMessage(error);
      toastError(errorMsg);
    },
  });

  const deleteCategory = useMutation({
    mutationFn: async (id: string) => {
      return await categoryService.deleteCategory(id);
    },
    onSuccess(data) {
      toastSuccess(data.data.message);
      getCategories.refetch();
    },
    onError(error) {
      const errorMsg = getCustomErrorMessage(error);
      toastError(errorMsg);
    },
  });

  const getCategories = useQuery({
    queryKey: ["categories"],
    queryFn: async () => categoryService.getCategories(),
  });

  return {
    getCategories,
    createCategory,
    deleteCategory,
  };
};

export { useCategoryManagement };
