import React, { useState } from "react";
import CustomInput from "../common/CustomInput";
// import Editor from "react-simple-wysiwyg";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { CustomButton } from "../common/CustomButton";
import { useNews } from "../../services/news/news";
import { useCategoryManagement } from "../../services/categories/categories";
import CustomSelect from "../common/CustomSelect";
import { NewsCategory } from "../../types/news";
import { getUserDetails } from "../../utils/saveData";
interface IProps {
  handleCloseCreate: () => void;
  isEditing?: boolean;
  editData: NewsCategory;
}

const CreateArticles = ({ handleCloseCreate, isEditing, editData }: IProps) => {
  const user = getUserDetails("user_data");

  const { createNewsMutation, updateNews } = useNews({
    handleClose: handleCloseCreate,
  });
  const { getCategories } = useCategoryManagement();
  const { data: categoryData, isPending: loadingCat } = getCategories;
  const { mutate, isPending } = createNewsMutation;
  const { mutate: updateMutate, isPending: isUpdatePending } = updateNews;
  const [newsContent, setNewsContent] = useState(
    editData ? editData.newsBody : ""
  );
  const [inputData, setInputData] = useState({
    title: editData?.newsTitle || "",
    subHeadline: editData?.subHeadline || "",
    category: editData?.category || "",
    imageUrl: editData?.newsImage || "",
    author: editData?.createdBy || user?.fullname,
    headline: editData?.headline === "true" ? "true" : "false",
  });

  const { title, category, imageUrl, author, subHeadline, headline } =
    inputData;

  const handleCreateBlog = () => {
    const payload = {
      newsTitle: title,
      subHeadline,
      newsBody: newsContent,
      headline,
      category,
      newsImage: imageUrl,
      createdBy: author,
      publish: false,
    };

    if (isEditing) {
      updateMutate({ id: editData._id!, payload });
    } else {
      mutate(payload);
    }
  };

  return (
    <div className="">
      <section className="flex justify-between flex-wrap md:flex-nowrap gap-4">
        <div className="md:w-[200px] w-[100%]">
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
        <div className="md:w-[200px] w-[100%]">
          <CustomInput
            type="text"
            placeholder="Enter Sub Headline"
            label="Sub Headline"
            value={subHeadline}
            name="subHeadline"
            handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setInputData({ ...inputData, subHeadline: e.target.value });
            }}
          />
        </div>
        <div className="md:w-[200px] w-[100%]">
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
        <div className="md:w-[200px] w-[100%]">
          <CustomSelect
            options={[
              { name: "True", val: "true" },
              { name: "False", val: "false" },
            ]}
            label={"Headline"}
            value={headline}
            name={"headline"}
            handleChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setInputData({
                ...inputData,
                headline: e.target.value,
              });
            }}
            className=""
          />
        </div>
      </section>

      <section className="flex justify-between flex-wrap md:flex-nowrap gap-4 mt-7">
        <div className="md:w-[400px] w-[100%]">
          <CustomSelect
            options={categoryData?.data?.data ?? []}
            label={loadingCat ? "Loading..." : "Blog Category"}
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
            disabled={true}
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
          text={isEditing ? "Update Blog" : "Create Blog"}
          isLoading={isPending || isUpdatePending}
          disabled={
            isPending ||
            isUpdatePending ||
            !title ||
            !newsContent ||
            !category ||
            !imageUrl
          }
        />
      </div>
    </div>
  );
};

export default CreateArticles;
