// import { MdDelete } from "react-icons/md";
import { CustomButton } from "../../common/CustomButton";
import CustomInput from "../../common/CustomInput";
import HeaderText from "../../common/HeaderText";
// import { useState } from "react";
// import { Modal } from "../../common/Modal";
// import DeleteCategory from "./DeleteCategory";
// import { BsFillSendCheckFill } from "react-icons/bs";
// import { MdOutlineCancel } from "react-icons/md";
import { useCategoryManagement } from "../../../services/categories/categories";
import { CategoryLoader } from "../../loaders";

const CategorySettings = () => {
  const { getCategories } = useCategoryManagement();

  const { data: categoryData, isPending: categoryLoading } = getCategories;
  // const [editingCategoryId, setEditingCategoryId] = useState("");
  // const [openDelete, setOpenDelete] = useState(false);
  // const [editedValue, setEditedValue] = useState<string>("");

  // const handleOpenDelete = (_id: string) => {
  //   setOpenDelete(true);
  //   setEditingCategoryId(_id);
  // };
  // const handleCloseDelete = () => {
  //   setOpenDelete(false);
  // };

  // const handleEdit = ({
  //   id,
  //   categoryName,
  // }: {
  //   id: string;
  //   categoryName: string;
  // }) => {
  //   setEditingCategoryId(id);
  //   setEditedValue(categoryName);
  // };

  // const cancelEdit = () => {
  //   setEditingCategoryId("");
  // };

  console.log(categoryData);

  return (
    <div>
      <HeaderText text="Manage Category" />
      <section className="mt-[20px]">
        <div className="flex items-center flex-wrap md:flex-nowrap gap-6 w-[100%] lg:w-[65%]">
          <div className="lg:w-[60%] md:w-[70%] w-[100%]">
            <CustomInput
              type="text"
              placeholder="Search category"
              handleChange={() => {}}
              value=""
              name=""
              label="Search Category"
              // className="w-[350px]"
            />
          </div>
          <div className="lg:w-[40%] md:w-[30%] w-[100%]">
            <CustomButton
              text="Search"
              handleClick={() => {}}
              className="md:mt-7"
            />
          </div>
        </div>

        <div className="mt-8">
          <h5 className="font-semibold my-4">Category List</h5>
          {categoryLoading ? (
            <CategoryLoader />
          ) : (
            categoryData?.data?.data.map(
              ({
                _id,
                categoryName,
              }: {
                _id: string;
                categoryName: string;
              }) => {
                return (
                  <div
                    className="h-[48px] flex items-center justify-between bg-white shadow-md rounded-md p-2 mb-[20px] w-[100%] lg:w-[65%] border"
                    key={_id}
                  >
                    {/* {editingCategoryId === _id ? (
                      <CustomInput
                        type="text"
                        value={editedValue}
                        name={editedValue}
                        handleChange={(e) => setEditedValue(e.target.value)}
                        className="h-[38px]"
                      />
                    ) : ( */}
                    <p className=" font-medium">{categoryName}</p>
                    {/* )} */}
                    <div className="flex items-center gap-2">
                      {/* <MdDelete
                        className="text-error cursor-pointer"
                        onClick={() => handleOpenDelete(_id)}
                      /> */}
                    </div>
                  </div>
                );
              }
            )
          )}
        </div>
      </section>
      {/* <Modal isOpen={openDelete} onClose={handleCloseDelete}>
        <DeleteCategory
          handleCloseDelete={handleCloseDelete}
          deleteId={editingCategoryId}
        />
      </Modal> */}
    </div>
  );
};

export default CategorySettings;
