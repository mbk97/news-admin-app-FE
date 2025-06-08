import { useUserManagement } from "../../services/roles/role";
import { IUser } from "../../types";
import { CustomButton } from "../common/CustomButton";

interface IProps {
  handleCloseBanModal: () => void;
  userData: IUser;
}

const BanUser = ({ handleCloseBanModal, userData }: IProps) => {
  const { modifyUserStatus } = useUserManagement({
    handleClose: handleCloseBanModal,
  });
  const { mutate, isPending } = modifyUserStatus;
  const handleRestrictUser = () => {
    mutate(userData._id);
  };

  return (
    <div className="flex items-center justify-center flex-col h-[100%]">
      <p className="text-center">
        {userData.userStatus
          ? "This user is currently active, are you sure you want to restrict them from accessing this application?"
          : "This user is currently restricted, are you sure you want to grant them access to this application?"}
      </p>
      <div className="flex items-center gap-3 mt-6">
        <CustomButton
          text={userData.userStatus ? "Restrict" : "Grant Access"}
          className="bg-error w-[140px] delete_btn"
          handleClick={handleRestrictUser}
          isLoading={isPending}
          disabled={isPending}
        />
        <CustomButton
          text="Cancel"
          className="bg-[#77ed77] w-[120px] cancel_btn"
          handleClick={handleCloseBanModal}
        />
      </div>
    </div>
  );
};

export default BanUser;
