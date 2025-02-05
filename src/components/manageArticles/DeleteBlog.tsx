import { CustomButton } from "../common/CustomButton";

interface IDeleteProps {
  data: any;
  handleCloseDelete: () => void;
}

const DeleteBlog = ({ data, handleCloseDelete }: IDeleteProps) => {
  return (
    <div className="flex items-center justify-center flex-col h-[100%]">
      <p>Are you sure you want to delete this blog?</p>
      <div className="flex items-center gap-3 mt-6">
        <CustomButton text="Delete" className="bg-error w-[120px]" />
        <CustomButton
          text="Cancel"
          className="bg-[#77ed77] w-[120px]"
          handleClick={handleCloseDelete}
        />
      </div>
    </div>
  );
};

export default DeleteBlog;
