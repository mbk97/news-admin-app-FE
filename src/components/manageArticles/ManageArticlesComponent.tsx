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
import CreateArticles from "./CreateArticles";
import ViewBlogDetails from "./ViewBlogDetails";
import CustomDrawer from "../common/CustomDrawer";
import { MdDelete } from "react-icons/md";
import { Modal } from "../common/Modal";
import DeleteBlog from "./DeleteBlog";
import PublishBlog from "./PublishBlog";
import { MdPublish } from "react-icons/md";

const ManageArticlesComponent = () => {
  const [openViewMore, setOpenViewMore] = useState<boolean>(false);
  const [openCreate, setOpenCreate] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [openPublish, setOpenPublish] = useState<boolean>(false);
  const [viewMoreData, setOpenViewMoreData] = useState({});

  const handleOpenPublish = (data: any) => {
    setOpenPublish(true);
    setOpenViewMoreData(data);
  };

  const handleClosePublish = () => {
    setOpenPublish(false);
  };

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
  const handleOpenDelete = (data: any) => {
    setOpenDelete(true);
    setOpenViewMoreData(data);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
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
              <IoMdEye className="primary" />
            </Tooltip>
          </IconButton>
          <IconButton
            onClick={() => {
              handleOpenDelete(value.cell.row.original);
            }}
          >
            <Tooltip title="Edit User" arrow>
              <MdDelete className="danger" />
            </Tooltip>
          </IconButton>
          <IconButton
            onClick={() => {
              handleOpenPublish(value.cell.row.original);
            }}
          >
            <Tooltip title="Publish" arrow>
              <MdPublish className="green" />
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
          <CreateArticles />
        </CustomModal>
        <CustomDrawer
          open={openViewMore}
          handleClose={handleCloseViewMore}
          drawerTitle="View More"
        >
          <ViewBlogDetails data={viewMoreData} />
        </CustomDrawer>

        <Modal isOpen={openDelete} onClose={handleCloseDelete}>
          <DeleteBlog
            data={viewMoreData}
            handleCloseDelete={handleCloseDelete}
          />
        </Modal>

        <Modal isOpen={openPublish} onClose={handleClosePublish}>
          <PublishBlog
            data={viewMoreData}
            handleClosePublish={handleClosePublish}
          />
        </Modal>
      </DashboardLayout>
    </div>
  );
};

export default ManageArticlesComponent;
