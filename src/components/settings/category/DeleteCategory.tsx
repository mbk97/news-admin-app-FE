import { useCategoryManagement } from "../../../services/categories/categories";
import { CustomButton } from "../../common/CustomButton";

interface IProps {
  handleCloseDelete: () => void;
  deleteId: string;
}

const DeleteCategory = ({ handleCloseDelete, deleteId }: IProps) => {
  const { deleteCategory } = useCategoryManagement();
  const { mutate: deleteCategoryMutation, isPending } = deleteCategory;

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
