import React, { useState } from "react";
import CustomInput from "../common/CustomInput";
// import Editor from "react-simple-wysiwyg";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { CustomButton } from "../common/CustomButton";
import { useNews } from "../../services/news/news";
import { useCategoryManagement } from "../../services/categories/categories";
import CustomSelect from "../common/CustomSelect";
interface IProps {
  handleCloseCreate: () => void;
}

const CreateArticles = ({ handleCloseCreate }: IProps) => {
  const { createNewsMutation } = useNews({ handleClose: handleCloseCreate });
  const { getCategories } = useCategoryManagement();
  const { data: categoryData, isPending: loadingCat } = getCategories;
  const { mutate, isPending } = createNewsMutation;
  const [newsContent, setNewsContent] = useState("");
  console.log(categoryData);
  const [inputData, setInputData] = useState({
    title: "",
    content: "",
    category: "",
    imageUrl: "",
    author: "",
  });

  const { title, category, imageUrl, author } = inputData;

  const handleCreateBlog = () => {
    const payload = {
      newsTitle: title,
      newsBody: newsContent,
      category,
      newsImage: imageUrl,
      createdBy: author,
      publish: false,
    };
    mutate(payload);
  };
  return (
    <div className="">
      <section className="flex justify-between flex-wrap md:flex-nowrap gap-4">
        <div className="md:w-[400px] w-[100%]">
          <CustomInput
            type="text"
            placeholder="Enter Blog Title"
            label="Blog Title"
            value={title}
            name="title"
            handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setInputData({ ...inputData, title: e.target.value });
            }}
          />
        </div>
        <div className="md:w-[400px] w-[100%]">
          <CustomInput
            type="text"
            placeholder="Blog Image URL"
            label="Blog URL"
            value={imageUrl}
            name="imageUrl"
            handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setInputData({ ...inputData, imageUrl: e.target.value });
            }}
          />
        </div>
      </section>

      <section className="flex justify-between flex-wrap md:flex-nowrap gap-4 mt-7">
        <div className="md:w-[400px] w-[100%]">
          <CustomSelect
            options={categoryData?.data?.data ?? []}
            label="Blog Category"
            value={category}
            name={"category"}
            handleChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setInputData({ ...inputData, category: e.target.value });
            }}
            className="md:w-[400px]"
          />
        </div>
        <div className="md:w-[400px] w-[100%]">
          <CustomInput
            type="text"
            placeholder="Created By"
            label="Created By"
            value={author}
            name="author"
            handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setInputData({ ...inputData, author: e.target.value });
            }}
            className="md:w-[400px]"
          />
        </div>
      </section>
      <section className="mt-7">
        <p className={`mb-3  block text-[12px] font-medium`}>Blog Content</p>
        <ReactQuill
          theme="snow"
          value={newsContent}
          onChange={setNewsContent}
          // modules={modules}
          placeholder="Enter the blog content here...."
          className="h-[400px]"
        />
      </section>
      <div className="grid place-items-center mt-7">
        <CustomButton
          handleClick={handleCreateBlog}
          className="md:w-[300px] mt-[70px]"
          text="Create Blog"
          isLoading={isPending}
          disabled={isPending}
        />
      </div>
    </div>
  );
};

export default CreateArticles;
