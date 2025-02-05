import blogImg from "../../assets/images/trend_img5.jpg";

interface IProps {
  data: any;
}

const ViewBlogDetails = ({ data }: IProps) => {
  return (
    <div>
      <div className="mt-5">
        <p className="my-[10px] font-semibold">Blog Image</p>
        <img
          src={blogImg}
          alt={`Image: ${data.newsTitle}`}
          className="w-[100%] h-[200px] object-center rounded-sm"
        />
      </div>

      <div className="mt-6">
        <p className="my-[10px] font-semibold">Blog Content</p>
        <div className="border h-auto w-full p-2 rounded-sm">
          <p>{data?.newsBody}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewBlogDetails;
