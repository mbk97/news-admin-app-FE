// import { useNavigate } from "react-router-dom";
import { useToast } from "../../hooks/useToast";
import { IUserPayload, userService } from "../api/userService";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCustomErrorMessage } from "../../utils/error";
import { get_roles_key } from "./roleKey";

interface IUserManagementProps {
  handleClose?: () => void;
  roleName?: string;
}

const useUserManagement = ({ handleClose, roleName }: IUserManagementProps) => {
  const { toastError, toastSuccess } = useToast();
  //   const navigate = useNavigate()

  const registerUserMutation = useMutation({
    mutationFn: async (user: IUserPayload) => {
      console.log(user);
      return userService.createUser(user);
    },
    onSuccess(data) {
      toastSuccess(data.data.message);
      handleClose?.();
    },
    onError(error) {
      const errorMsg = getCustomErrorMessage(error);
      toastError(errorMsg);
    },
  });

  const getRoles = useQuery({
    queryKey: [get_roles_key],
    queryFn: async () => userService.getAllRoles(),
  });
  const getAllUserUnderRole = useQuery({
    queryKey: ["roleName"],
    queryFn: async () => userService.getAllUsersUnderARole(roleName!),
    enabled: !!roleName, // Only run if roleName is defined
  });

  return {
    registerUserMutation,
    getRoles,
    getAllUserUnderRole,
  };
};

export { useUserManagement };
