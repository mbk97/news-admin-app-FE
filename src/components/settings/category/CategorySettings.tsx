import { MdDelete, MdEdit } from "react-icons/md";
import { CustomButton } from "../../common/CustomButton";
import CustomInput from "../../common/CustomInput";
import HeaderText from "../../common/HeaderText";
import { useState } from "react";
import { Modal } from "../../common/Modal";
import DeleteCategory from "./DeleteCategory";
import { BsFillSendCheckFill } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";

const CategorySettings = () => {
  const [editingCategoryId, setEditingCategoryId] = useState(null);

  const [openDelete, setOpenDelete] = useState(false);
  const [editedValue, setEditedValue] = useState<string>("");

  const handleOpenDelete = () => {
    setOpenDelete(true);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handleEdit = ({ id, categoryName }: any) => {
    setEditingCategoryId(id);
    setEditedValue(categoryName);
  };

  const cancelEdit = () => {
    setEditingCategoryId(null);
  };

  const categoryData = [
    {
      id: 1,
      categoryName: "Sports",
    },
    {
      id: 2,
      categoryName: "Politics",
    },
    {
      id: 3,
      categoryName: "Business",
    },
    {
      id: 4,
      categoryName: "Entertainment",
    },
    {
      id: 5,
      categoryName: "History",
    },
  ];

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
          {categoryData.map(({ id, categoryName }) => {
            return (
              <div
                className="h-[48px] flex items-center justify-between bg-white shadow-md rounded-md p-2 mb-[20px] w-[100%] lg:w-[65%] border"
                key={id}
              >
                {editingCategoryId === id ? (
                  <CustomInput
                    type="text"
                    value={editedValue}
                    name={editedValue}
                    handleChange={(e) => setEditedValue(e.target.value)}
                    className="h-[38px]"
                  />
                ) : (
                  <p className=" font-medium">{categoryName}</p>
                )}
                <div className="flex items-center gap-2">
                  <MdEdit
                    className="text-primary cursor-pointer"
                    onClick={() => handleEdit({ id, categoryName })}
                  />
                  {editingCategoryId === id && (
                    <MdOutlineCancel
                      className="text-error cursor-pointer"
                      onClick={cancelEdit}
                    />
                  )}
                  <MdDelete
                    className="text-error cursor-pointer"
                    onClick={handleOpenDelete}
                  />
                  {editingCategoryId === id && (
                    <BsFillSendCheckFill className="text-[#77ed77] cursor-pointer" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Modal isOpen={openDelete} onClose={handleCloseDelete}>
        <DeleteCategory handleCloseDelete={handleCloseDelete} />
      </Modal>
    </div>
  );
};

export default CategorySettings;
