import { useState } from "react";
import { CustomButton } from "../common/CustomButton";
import CustomInput from "../common/CustomInput";
import HeaderText from "../common/HeaderText";
import DashboardLayout from "../layout/DashboardLayout";
import CustomModal from "../common/CustomModal";
import { IconButton, Tooltip } from "@mui/material";
import { IoMdEye } from "react-icons/io";
import CustomTable from "../common/CustomTable";
import CreateArticles from "./CreateArticles";
import ViewBlogDetails from "./ViewBlogDetails";
import CustomDrawer from "../common/CustomDrawer";
import { MdDelete, MdEdit } from "react-icons/md";
import { Modal } from "../common/Modal";
import DeleteBlog from "./DeleteBlog";
import PublishBlog from "./PublishBlog";
import { useNews } from "../../services/news/news";
import { TableLoader } from "../loaders";
import { CellValue, IfilterNewsPayload, NewsCategory } from "../../types/news";
import { useToast } from "../../hooks/useToast";
import { isAuthorized } from "../../utils/saveData";
import { ROLES } from "../../constants/role";
import { FaBan } from "react-icons/fa";
import { formatDate } from "../../utils/date";

const ManageArticlesComponent = () => {
  const { toastError } = useToast();
  const [openViewMore, setOpenViewMore] = useState<boolean>(false);
  const [openCreate, setOpenCreate] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [openPublish, setOpenPublish] = useState<boolean>(false);
  const [viewMoreData, setOpenViewMoreData] = useState<NewsCategory>();
  const [openEditModal, setOpenEditModal] = useState(false);
  const [inputData, setInputData] = useState<IfilterNewsPayload>({
    newsTitle: "",
    category: "",
    createdBy: "",
    dateFrom: "",
    dateTo: "",
    pageNo: 1,
    pageSize: 10,
  });
  const { newsTitle, category, createdBy, dateFrom, dateTo, pageSize } =
    inputData;
  const { fetchAllAvailableNews } = useNews({
    filterParamsForNews: inputData,
  });
  const { data: newsData, isFetching: loading } = fetchAllAvailableNews;
  const totalPages = newsData?.totalPages;
  const currentPage = newsData?.currentPage;
  const totalItems = newsData?.totalItems;
  const tableData = newsData?.data || [];

  const handleOpenEdit = (data: NewsCategory) => {
    setOpenEditModal(true);
    setOpenViewMoreData(data);
  };
  const handleCloseEdit = () => {
    setOpenEditModal(false);
    setOpenViewMoreData(undefined);
  };

  const handleOpenPublish = (data: NewsCategory) => {
    setOpenPublish(true);
    setOpenViewMoreData(data);
  };

  const handleClosePublish = () => {
    setOpenPublish(false);
  };

  const handleOpenViewMore = (data: NewsCategory) => {
    setOpenViewMore(true);
    setOpenViewMoreData(data);
    setOpenEditModal(false);
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
  const handleOpenDelete = (data: NewsCategory) => {
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
      Cell: ({ value }: { value: string }) => formatDate(value),
    },
    {
      Header: "Action",
      accessor: "action",
      Cell: (value: CellValue) => (
        <div className="flex gap-2 items-center">
          <IconButton
            onClick={() => {
              handleOpenViewMore(value.cell.row.original);
            }}
          >
            <Tooltip title="View More" arrow>
              <IoMdEye className="primary" />
            </Tooltip>
          </IconButton>
          <IconButton
            onClick={() => {
              handleOpenEdit(value.cell.row.original);
            }}
          >
            <Tooltip title="Edit Modal" arrow>
              <MdEdit className="primary" />
            </Tooltip>
          </IconButton>
          {isAuthorized([ROLES.ADMIN]) ? (
            <IconButton
              onClick={() => {
                handleOpenDelete(value.cell.row.original);
              }}
            >
              <Tooltip title="Edit User" arrow>
                <MdDelete className="danger" />
              </Tooltip>
            </IconButton>
          ) : null}
          {isAuthorized([ROLES.ADMIN]) ? (
            <>
              {!value.cell.row.original.publish ? (
                <div
                  onClick={() => {
                    handleOpenPublish(value.cell.row.original);
                  }}
                >
                  <p className="bg-yellow-300 whitespace-nowrap text-white p-1 rounded-md cursor-pointer hover:bg-yellow-400 transition-all duration-200 font-medium w-[70px] text-center">
                    Publish
                  </p>
                </div>
              ) : (
                <p className="bg-green-400 p-1 text-white rounded-md font-medium w-[70px] text-center">
                  Published
                </p>
              )}
            </>
          ) : (
            <FaBan className="text-error" size={20} />
          )}
        </div>
      ),
    },
  ];

  const handleNext = () => {
    setInputData((prev) => ({
      ...prev,
      pageNo: prev.pageNo + 1,
    }));
  };

  const handlePrev = () => {
    setInputData((prev) => ({
      ...prev,
      pageNo: prev.pageNo > 1 ? prev.pageNo - 1 : 1,
    }));
  };

  const handleSearch = () => {
    if (!newsTitle && !createdBy && !category && !dateFrom && !dateTo) {
      toastError("Please enter a search parameter.");
      return;
    }
    fetchAllAvailableNews.refetch();
  };
  const handleClearSearch = () => {
    setInputData({
      newsTitle: "",
      category: "",
      createdBy: "",
      dateFrom: "",
      dateTo: "",
      pageNo: 1,
      pageSize: 10,
    });
    fetchAllAvailableNews.refetch();
  };

  return (
    <div>
      <DashboardLayout>
        <div className="mt-10">
          <div className="flex items-center justify-between">
            <HeaderText text="Manage Blogs" />
            {
              <CustomButton
                text="Create blog"
                className="w-[120px] h-[40px]"
                handleClick={handleOpenCreate}
              />
            }
          </div>
          <section className="mt-8  bg-white rounded-md p-5 grid grid-cols-1 lg:grid-cols-4 gap-8">
            <CustomInput
              type="text"
              placeholder="Search by title"
              label="Title "
              value={newsTitle}
              name={"newsTitle"}
              handleChange={(e) => {
                setInputData((prev) => ({
                  ...prev,
                  newsTitle: e.target.value.trim(),
                }));
              }}
            />
            <CustomInput
              type="text"
              placeholder="Search by Author"
              label="Author"
              value={createdBy}
              name="createdBy"
              handleChange={(e) => {
                setInputData((prev) => ({
                  ...prev,
                  createdBy: e.target.value.trim(),
                }));
              }}
            />
            <CustomInput
              type="text"
              placeholder="Search by Category"
              label="Category"
              value={category}
              name="category"
              handleChange={(e) => {
                setInputData((prev) => ({
                  ...prev,
                  category: e.target.value.trim(),
                }));
              }}
            />
            <CustomInput
              type="date"
              label="Date From"
              value={dateFrom}
              name="dateFrom"
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setInputData((prev) => ({
                  ...prev,
                  dateFrom: e.target.value.trim(),
                }));
              }}
            />
            <CustomInput
              type="date"
              label="Date To"
              value={dateTo}
              name={"dateTo"}
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setInputData((prev) => ({
                  ...prev,
                  dateTo: e.target.value.trim(),
                }));
              }}
            />
            <CustomButton
              text="Filter Table Results"
              className="w-auto h-[40px] mt-[30px]"
              type="submit"
              handleClick={handleSearch}
              isLoading={loading}
              disabled={loading}
            />
            <CustomButton
              text="Clear Search"
              className="w-auto h-[40px] mt-[30px]"
              handleClick={handleClearSearch}
              isLoading={loading}
              disabled={loading}
            />
          </section>

          <section className="mt-8  bg-white rounded-md p-5">
            <HeaderText text="Created Blogs" />
            {loading ? (
              <TableLoader />
            ) : (
              <>
                <CustomTable columns={column} data={tableData ?? []} />
                <div className="flex flex-wrap justify-end items-center gap-4 mt-6">
                  {/* Pagination Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      disabled={currentPage === 1}
                      className="px-4 py-2 bg-gray-100 text-sm rounded-md border hover:bg-gray-200 disabled:opacity-50"
                    >
                      Prev
                    </button>

                    <span className="text-sm text-gray-700">
                      Page <strong>{currentPage}</strong> of{" "}
                      <strong>{totalPages}</strong>
                    </span>

                    <button
                      onClick={handleNext}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 bg-gray-100 text-sm rounded-md border hover:bg-gray-200 disabled:opacity-50"
                    >
                      Next
                    </button>
                  </div>

                  {/* Total Items */}
                  <p className="text-sm text-gray-600">
                    <strong>{totalItems}</strong> Items
                  </p>

                  {/* Page Size Selector */}
                  <div className="flex items-center gap-2">
                    <label htmlFor="pageSize" className="text-sm text-gray-600">
                      Show:
                    </label>
                    <select
                      id="pageSize"
                      value={pageSize}
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          pageSize: Number(e.target.value),
                        })
                      }
                      className="text-sm border border-gray-300 rounded-md px-2 py-1 bg-white focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      {[5, 10, 20, 50, 70, 100].map((size) => (
                        <option key={size} value={size}>
                          {size} / page
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </>
            )}
          </section>
        </div>

        <CustomModal
          open={openCreate ? openCreate : openEditModal}
          dialogTitle={openCreate ? "Create Blog" : "Edit Blog"}
          handleClose={openCreate ? handleCloseCreate : handleCloseEdit}
          width="md"
        >
          <CreateArticles
            handleCloseCreate={openCreate ? handleCloseCreate : handleCloseEdit}
            isEditing={openEditModal}
            editData={viewMoreData!}
          />
        </CustomModal>
        <CustomDrawer
          open={openViewMore}
          handleClose={handleCloseViewMore}
          drawerTitle="View More"
        >
          <ViewBlogDetails data={viewMoreData!} />
        </CustomDrawer>

        <Modal isOpen={openDelete} onClose={handleCloseDelete}>
          <DeleteBlog
            data={viewMoreData!}
            handleCloseDelete={handleCloseDelete}
          />
        </Modal>

        <Modal isOpen={openPublish} onClose={handleClosePublish}>
          <PublishBlog
            data={viewMoreData!}
            handleClosePublish={handleClosePublish}
          />
        </Modal>
      </DashboardLayout>
    </div>
  );
};

export default ManageArticlesComponent;
