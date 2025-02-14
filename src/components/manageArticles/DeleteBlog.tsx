import { CustomButton } from "../common/CustomButton";

interface IDeleteProps {
  data: any;
  handleCloseDelete: () => void;
}

const DeleteBlog = ({ data, handleCloseDelete }: IDeleteProps) => {
  console.log(data);
  return (
    <div className="flex items-center justify-center flex-col h-[100%]">
      <p>Are you sure you want to delete this blog?</p>
      <div className="flex items-center gap-3 mt-6">
        <CustomButton text="Delete" className="bg-error w-[120px] delete_btn" />
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
