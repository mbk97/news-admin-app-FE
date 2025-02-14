import { CustomButton } from "../common/CustomButton";

interface IProps {
  handleCloseBanModal: () => void;
  userData: any;
}

const BanUser = ({ handleCloseBanModal, userData }: IProps) => {
  console.log(userData);
  return (
    <div className="flex items-center justify-center flex-col h-[100%]">
      <p>Are you sure you want to restrict this user?</p>
      <div className="flex items-center gap-3 mt-6">
        <CustomButton
          text="Restrict"
          className="bg-error w-[120px] delete_btn"
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
