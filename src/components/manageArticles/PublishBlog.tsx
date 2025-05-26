import { useNews } from "../../services/news/news";
import { NewsCategory } from "../../types/news";
import { CustomButton } from "../common/CustomButton";

interface IPublishProps {
  data: NewsCategory;
  handleClosePublish: () => void;
}

const PublishBlog = ({ data, handleClosePublish }: IPublishProps) => {
  const { publishNews } = useNews({ handleClose: handleClosePublish });
  const { mutate, isPending } = publishNews;
  const newsId = data?._id;

  const handlePublishNews = () => {
    mutate(newsId);
  };

  return (
    <div className="flex items-center justify-center flex-col h-[100%]">
      <p>Are you sure you want to publish this blog?</p>
      <div className="flex items-center gap-3 mt-6">
        <CustomButton
          text="Publish"
          className="cancel_btn w-[120px] "
          isLoading={isPending}
          handleClick={handlePublishNews}
          disabled={isPending}
        />
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
