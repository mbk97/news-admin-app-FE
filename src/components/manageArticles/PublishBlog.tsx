import { CustomButton } from "../common/CustomButton";

interface IPublishProps {
  data: any;
  handleClosePublish: () => void;
}

const PublishBlog = ({ data, handleClosePublish }: IPublishProps) => {
  return (
    <div className="flex items-center justify-center flex-col h-[100%]">
      <p>Are you sure you want to publish this blog?</p>
      <div className="flex items-center gap-3 mt-6">
        <CustomButton text="Publish" className="cancel_btn w-[120px] " />
        <CustomButton
          text="Cancel"
          className="w-[120px] delete_btn"
          handleClick={handleClosePublish}
        />
      </div>
    </div>
  );
};

export default PublishBlog;
