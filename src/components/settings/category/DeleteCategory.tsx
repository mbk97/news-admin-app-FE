import { CustomButton } from "../../common/CustomButton";

const DeleteCategory = ({ handleCloseDelete }: any) => {
  return (
    <div className="flex items-center justify-center flex-col h-[100%]">
      <p>Are you sure you want to delete this category?</p>
      <div className="flex items-center gap-3 mt-6">
        <CustomButton text="Delete" className=" w-[120px] delete_btn" />
        <CustomButton
          text="Cancel"
          className="w-[120px] cancel_btn"
          handleClick={handleCloseDelete}
        />
      </div>
    </div>
  );
};

export default DeleteCategory;
