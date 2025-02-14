import { useState } from "react";
import CustomInput from "../common/CustomInput";
// import Editor from "react-simple-wysiwyg";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { CustomButton } from "../common/CustomButton";

const CreateArticles = () => {
  const [newsContent, setNewsContent] = useState("");
  return (
    <div className="">
      <section className="flex justify-between flex-wrap md:flex-nowrap gap-4">
        <div className="md:w-[400px] w-[100%]">
          <CustomInput
            type="text"
            placeholder="Enter Blog Title"
            label="Blog Title"
            value=""
            name=""
            handleChange={() => {}}
          />
        </div>
        <div className="md:w-[400px] w-[100%]">
          <CustomInput
            type="text"
            placeholder="Blog Image URL"
            label="Blog URL"
            value=""
            name=""
            handleChange={() => {}}
          />
        </div>
      </section>

      <section className="flex justify-between flex-wrap md:flex-nowrap gap-4 mt-7">
        <div className="md:w-[400px] w-[100%]">
          <CustomInput
            type="text"
            placeholder="Enter Blog Category"
            label="Blog Category"
            value=""
            name=""
            handleChange={() => {}}
            className="md:w-[400px]"
          />
        </div>
        <div className="md:w-[400px] w-[100%]">
          <CustomInput
            type="text"
            placeholder="Created By"
            label="Created By"
            value=""
            name=""
            handleChange={() => {}}
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
          handleClick={() => {}}
          className="md:w-[300px] mt-[70px]"
          text="Create Blog"
        />
      </div>
    </div>
  );
};

export default CreateArticles;
