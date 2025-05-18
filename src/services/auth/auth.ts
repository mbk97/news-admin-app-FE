import { useMutation } from "@tanstack/react-query";
import { useToast } from "../../hooks/useToast";
import { getCustomErrorMessage } from "../../utils/error";
import { ILoginPayload, IUpdatePassword } from "../../types/auth";
import { authService } from "../api/authService";

const useUserAuth = () => {
  const { toastError } = useToast();

  const loginUserMutation = useMutation({
    mutationFn: (payload: ILoginPayload) => authService.login(payload),
    onError: (error) => {
      const errorMsg = getCustomErrorMessage(error);
      toastError(`Login Error: ${errorMsg}`);
    },
  });

  const updatePasswordMutation = useMutation({
    mutationFn: (payload: IUpdatePassword) =>
      authService.updatePassword(payload),
    onError: (error) => {
      const errorMsg = getCustomErrorMessage(error);
      toastError(`Password Update Error: ${errorMsg}`);
    },
  });

  const forgotPasswordMutation = useMutation({
    mutationFn: (email: string) => authService.forgotPassword(email),
    onError: (error) => {
      const errorMsg = getCustomErrorMessage(error);
      toastError(`Password Reset Error: ${errorMsg}`);
    },
  });

  return {
    loginUserMutation,
    updatePasswordMutation,
    forgotPasswordMutation,
  };
};

export { useUserAuth };
