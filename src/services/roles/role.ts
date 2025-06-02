// import { useNavigate } from "react-router-dom";
import { useToast } from "../../hooks/useToast";
import {
  ICreateRolePayload,
  IUserPayload,
  userService,
} from "../api/userService";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCustomErrorMessage } from "../../utils/error";
import { get_roles_key } from "./roleKey";
import { GetUserActivitiesPayload } from "../../types/auth";

interface IUserManagementProps {
  handleClose?: () => void;
  roleName?: string;
  fullname?: string;
  searchParamsForPagination?: GetUserActivitiesPayload;
}

const useUserManagement = ({
  handleClose,
  roleName,
  fullname,
  searchParamsForPagination,
}: IUserManagementProps) => {
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

  const createUserRoleMutation = useMutation({
    mutationFn: async (payload: ICreateRolePayload) => {
      return userService.createRole(payload);
    },
    onSuccess(data) {
      toastSuccess(data.data.message);
      getRoles.refetch();
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

  const getAllUsers = useQuery({
    queryKey: ["users"],
    queryFn: async () => userService.getAllUsers({ roleName, fullname }),
    select(data) {
      return data.data.data;
    },
  });

  const fetchUserActivities = useQuery({
    queryKey: ["user-activity", searchParamsForPagination],
    queryFn: async () =>
      userService.getUserActivities(searchParamsForPagination!),
    select(data) {
      return data.data;
    },
  });

  return {
    registerUserMutation,
    getRoles,
    getAllUserUnderRole,
    createUserRoleMutation,
    getAllUsers,
    fetchUserActivities,
  };
};

export { useUserManagement };
