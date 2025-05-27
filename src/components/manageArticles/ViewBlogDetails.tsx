import { NewsCategory } from "../../types/news";
import { getImageSrcFromBase64 } from "../../utils/image";

interface IProps {
  data: NewsCategory;
}

const ViewBlogDetails = ({ data }: IProps) => {
  const imageSrc =
    data?.newsImage.startsWith("data:") || data?.newsImage.startsWith("http")
      ? data.newsImage
      : getImageSrcFromBase64(data.newsImage);

  const htmlContent = data.newsBody;
  return (
    <div>
      <div className="mt-5">
        <p className="my-[10px] font-semibold">Blog Image</p>
        <img
          src={imageSrc}
          alt={`Image: ${data.newsTitle}`}
          className="w-[100%] h-[200px] object-center rounded-sm"
        />
      </div>

      <div className="mt-6">
        <p className="my-[10px] font-semibold">Blog Content</p>
        <div className="border h-auto w-full p-2 rounded-sm">
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewBlogDetails;
