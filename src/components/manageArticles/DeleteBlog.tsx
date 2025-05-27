import { useNews } from "../../services/news/news";
import { NewsCategory } from "../../types/news";
import { CustomButton } from "../common/CustomButton";

interface IDeleteProps {
  data: NewsCategory;
  handleCloseDelete: () => void;
}

const DeleteBlog = ({ data, handleCloseDelete }: IDeleteProps) => {
  const { deleteNews } = useNews({ handleClose: handleCloseDelete });
  const { mutate, isPending } = deleteNews;
  const handleDelete = () => {
    mutate(data._id);
  };

  return (
    <div className="flex items-center justify-center flex-col h-[100%]">
      <p>Are you sure you want to delete this blog?</p>
      <div className="flex items-center gap-3 mt-6">
        <CustomButton
          text="Delete"
          className="bg-error w-[120px] delete_btn"
          isLoading={isPending}
          handleClick={handleDelete}
          disabled={isPending}
        />
        <CustomButton
          text="Cancel"
          className="bg-[#77ed77] w-[120px] cancel_btn"
          handleClick={handleCloseDelete}
        />
      </div>
    </div>
  );
};

export default DeleteBlog;
