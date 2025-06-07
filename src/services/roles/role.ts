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
    queryKey: ["users", roleName, fullname],
    queryFn: async () => userService.getAllUsers({ roleName, fullname }),
    // enabled: false, // Only run if neither roleName nor fullname is provided
    refetchOnWindowFocus: false,
    select(data) {
      return data.data.data;
    },
  });
  const modifyUserStatus = useMutation({
    mutationFn: async (id: string) => {
      return userService.modifyUserStatus(id);
    },
    onSuccess(data) {
      toastSuccess(data.data.message);
      handleClose?.();
      getAllUsers.refetch();
      getAllUserUnderRole.refetch();
    },
    onError(error) {
      const errorMsg = getCustomErrorMessage(error);
      toastError(errorMsg);
    },
  });

  const editUserMutation = useMutation({
    mutationFn: async (payload: {
      id: string;
      fullname: string;
      roleName: string;
    }) => {
      const { id, ...userData } = payload;
      return userService.updateUser(id, userData);
    },
    onSuccess(data) {
      toastSuccess(data.data.message);
      handleClose?.();
      getAllUsers.refetch();
      getAllUserUnderRole.refetch();
    },
    onError(error) {
      const errorMsg = getCustomErrorMessage(error);
      toastError(errorMsg);
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
    modifyUserStatus,
    fetchUserActivities,
    editUserMutation,
  };
};

export { useUserManagement };
