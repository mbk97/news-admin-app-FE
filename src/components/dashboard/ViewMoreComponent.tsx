import { NewsCategory } from "../../types/news";

interface IProps {
  viewMoreData: NewsCategory;
}

const ViewMoreComponent = ({ viewMoreData }: IProps) => {
  console.log(viewMoreData);

  return (
    <div>
      <section>
        <h2 className="font-semibold mb-4">News Image</h2>
        <img
          src={viewMoreData.newsImage}
          alt="News"
          className="w-full h-[400px] object-cover"
        />
      </section>
      <section>
        <h2 className="font-semibold mt-4 mb-2">News Title</h2>
        <p className="text-black  p-1">{viewMoreData.newsTitle}</p>
      </section>
      <section>
        <h2 className="font-semibold mt-4 mb-2">News Category</h2>
        <p className="text-black  p-1">{viewMoreData.category}</p>
      </section>
      <section>
        <h2 className="font-semibold mt-4 mb-2">News Body</h2>
        <div
          className="border h-auto w-full p-2 rounded-sm"
          dangerouslySetInnerHTML={{ __html: viewMoreData.newsBody }}
        />
      </section>

      <section>
        <h2 className="font-semibold mt-4 mb-2">Publish Status</h2>
        <p
          className={`p-1 rounded text-sm font-medium w-[100px] text-center ${
            viewMoreData.publish
              ? "bg-green-600 text-white"
              : "bg-yellow-300 text-black"
          }`}
        >
          {viewMoreData.publish ? "Published" : "Not Published"}
        </p>
      </section>
    </div>
  );
};

export default ViewMoreComponent;
