import { saveUserDetails } from "./../../utils/saveData";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "../../hooks/useToast";
import { getCustomErrorMessage } from "../../utils/error";
import {
  ILoginPayload,
  IResetPayload,
  IUpdatePassword,
} from "../../types/auth";
import { authService } from "../api/authService";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

const useUserAuth = () => {
  const { toastError, toastSuccess } = useToast();
  const navigate = useNavigate();

  const loginUserMutation = useMutation({
    mutationFn: (payload: ILoginPayload) => authService.login(payload),
    onSuccess(data) {
      saveUserDetails("user_data", data?.data.user);
      toastSuccess(data?.data.message);
      navigate("/dashboard");
    },
    onError: (error: AxiosError) => {
      const errorMsg = getCustomErrorMessage(error);
      toastError(`Login Error: ${errorMsg}`);
    },
  });

  const updatePasswordMutation = useMutation({
    mutationFn: (payload: IUpdatePassword) =>
      authService.updatePassword(payload),
    onSuccess(data) {
      toastSuccess(data?.data.message);
      navigate("/dashboard");
    },
    onError: (error: AxiosError) => {
      const errorMsg = getCustomErrorMessage(error);
      toastError(`Password Update Error: ${errorMsg}`);
    },
  });

  const forgotPasswordMutation = useMutation({
    mutationFn: (email: string) => authService.forgotPassword(email),
    onSuccess(data) {
      toastSuccess(data?.data.message);
      navigate("/");
    },
    onError: (error: AxiosError) => {
      const errorMsg = getCustomErrorMessage(error);
      toastError(`Password Reset Error: ${errorMsg}`);
    },
  });
  const resetPasswordMutation = useMutation({
    mutationFn: (payload: IResetPayload) => authService.resetPassword(payload),

    onSuccess: (data) => {
      toastSuccess(data?.data?.message || "Password reset successfully.");
      navigate("/");
    },

    onError: (error: AxiosError) => {
      const errorMsg = getCustomErrorMessage(error);
      toastError(`Password Reset Error: ${errorMsg}`);
    },
  });

  return {
    loginUserMutation,
    updatePasswordMutation,
    forgotPasswordMutation,
    resetPasswordMutation,
  };
};

export { useUserAuth };
