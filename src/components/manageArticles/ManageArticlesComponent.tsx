import { useState } from "react";
import { CustomButton } from "../common/CustomButton";
import CustomInput from "../common/CustomInput";
import HeaderText from "../common/HeaderText";
import DashboardLayout from "../layout/DashboardLayout";
import CustomModal from "../common/CustomModal";
import { IconButton, Tooltip } from "@mui/material";
import { IoMdEye } from "react-icons/io";
import CustomTable from "../common/CustomTable";
import { newsData } from "../../utils/data";

const ManageArticlesComponent = () => {
  const [openViewMore, setOpenViewMore] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);
  const [viewMoreData, setOpenViewMoreData] = useState({});

  const handleOpenViewMore = (data: any) => {
    setOpenViewMore(true);
    setOpenViewMoreData(data);
  };
  const handleCloseViewMore = () => {
    setOpenViewMore(false);
  };
  const handleOpenCreate = () => {
    setOpenCreate(true);
  };
  const handleCloseCreate = () => {
    setOpenCreate(false);
  };

  const column = [
    {
      Header: "News Title",
      accessor: "newsTitle",
    },
    {
      Header: "Category",
      accessor: "category",
    },
    {
      Header: "Created By",
      accessor: "createdBy",
    },
    {
      Header: "Date Created",
      accessor: "createdAt",
    },
    {
      Header: "Action",
      accessor: "action",
      Cell: (value: any) => (
        <div className="flex gap-2 items-center">
          <IconButton
            onClick={() => {
              handleOpenViewMore(value.cell.row.original);
            }}
          >
            <Tooltip title="Edit User" arrow>
              <IoMdEye />
            </Tooltip>
          </IconButton>
        </div>
      ),
    },
  ];

  return (
    <div>
      <DashboardLayout>
        <div className="mt-10">
          <div className="flex items-center justify-between">
            <HeaderText text="Manage Blogs" />
            <CustomButton
              text="Create blog"
              className="w-[120px] h-[40px]"
              handleClick={handleOpenCreate}
            />
          </div>
          <section className="mt-8  bg-white rounded-md p-5 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <CustomInput
              type="text"
              placeholder="Search by title"
              label="Title "
              value=""
              name=""
              handleChange={() => {}}
            />
            <CustomInput
              type="text"
              placeholder="Search by Author"
              label="Author"
              value=""
              name=""
              handleChange={() => {}}
            />
            <CustomInput
              type="text"
              placeholder="Search by Category"
              label="Category"
              value=""
              name=""
              handleChange={() => {}}
            />
            <CustomInput
              type="date"
              placeholder=""
              label="Date From"
              value=""
              name=""
              handleChange={() => {}}
            />
            <CustomInput
              type="date"
              placeholder=""
              label="Date To"
              value=""
              name=""
              handleChange={() => {}}
            />
            <CustomButton
              text="Filter Table Results"
              className="w-auto h-[40px] mt-[30px]"
              // handleClick={handleOpen}
            />
          </section>

          <section className="mt-8  bg-white rounded-md p-5">
            <HeaderText text="Created Blogs" />
            <CustomTable columns={column} data={newsData} />
          </section>
        </div>

        <CustomModal
          open={openCreate}
          dialogTitle="Create Blog"
          width="md"
          handleClose={handleCloseCreate}
        >
          <h1>Create Blog</h1>
        </CustomModal>
        <CustomModal
          open={openViewMore}
          dialogTitle="View Blog Details"
          width="md"
          handleClose={handleCloseViewMore}
        >
          <h1>View Blog Details</h1>
        </CustomModal>
      </DashboardLayout>
    </div>
  );
};

export default ManageArticlesComponent;
