import { FaSearch } from "react-icons/fa";
import { cardData, newsData, trendingNews } from "../../utils/data";
import Card from "../common/Card";
import React, { useState } from "react";
import user from "../../assets/images/user.jpg";
import { IoMdEye, IoMdNotifications } from "react-icons/io";
import CustomTable from "../common/CustomTable";
import { IconButton, Tooltip } from "@mui/material";
import CustomModal from "../common/CustomModal";

const DashboardComponent = () => {
  const [viewMoreData, setViewMoreData] = useState({});
  const [open, setOpen] = useState(false);

  const handleOpenViewMore = (data: any) => {
    setViewMoreData(data);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

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
    <React.Fragment>
      <main>
        <div className="flex gap-5 mt-[40px] md:mt-[0px] justify-between">
          <section className="w-[100%] ">
            <div className="mb-[40px] ">
              <div className="w-[100%] relative">
                <input
                  type="text"
                  className="h-[52px] bg-[#ffffff] w-[100%]  rounded-md border-[red] p-3 outline-primary"
                  placeholder="Search"
                />
                <div className="absolute right-4 top-3">
                  <FaSearch />
                </div>
              </div>
            </div>
          </section>
          <section className="md:w-[20%] w-[0] lg:block hidden">
            <div className="h-[52px] bg-[#ffffff] w-[100%] flex items-center justify-between  rounded-md border-[red] p-3 outline-primary">
              <div className="border-[1.4px] p-1 rounded-[50%] border-black">
                <img
                  src={user}
                  alt="user"
                  className="h-[28px] w-[28px] rounded-[50%]"
                />
              </div>
              <div>
                <h6 className="text-[14px] font-medium">Mubarak</h6>
                <p className="font-semibold text-[12px]">Admin</p>
              </div>
              <div className="relative">
                <IoMdNotifications size={30} />

                <div className="h-[7px] absolute top-1 right-2 w-[7px] bg-[red] rounded-[50%]"></div>
              </div>
            </div>
          </section>
        </div>
        <section className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 gap-4">
          {/* <div className="flex gap-3 flex-wrap md:flex-nowrap"> */}
          {cardData.map((card) => {
            return (
              <Card
                key={card.id}
                cardDetails={card.cardDetails}
                CardIcon={card.CardIcon}
                cardSubtitle={card.cardSubtitle}
                cardTitle={card.cardTitle}
                cardType={card.cardType}
              />
            );
          })}
        </section>
        <div className="my-[30px]">
          <section className="flex gap-6 mt-2 flex-wrap md:flex-nowrap">
            <div className="md:w-[75%] w-[100%] bg-white p-[15px] rounded-md h-[auto]">
              <h2 className="font-semibold text-[18px]">
                Recently Created News
              </h2>
              <CustomTable columns={column} data={newsData} />
            </div>
            <div className="md:w-[25%] w-[100%] bg-white p-[15px] rounded-md h-[auto]">
              <h2 className="font-semibold text-[18px]">Trending News</h2>

              <div>
                {trendingNews.map((trend, index) => {
                  return (
                    <div
                      className="h-[90px] w-[100%] shadow-md border rounded-md p-1 mb-5 mt-3 gap-3"
                      key={index}
                    >
                      <section className="flex gap-3">
                        <div>
                          <img
                            src={trend.image}
                            className="rounded-[50%] border h-[70px] object-center w-[80px]"
                          />
                        </div>
                        <div>
                          <p className="text-[12px] font-semibold">
                            <p>
                              {trend.title.length > 30
                                ? trend.title.substring(0, 30) + "..."
                                : trend.title}
                            </p>
                          </p>
                          <div>
                            <p className="text-[12px] text-gray-500 mt-2">
                              <span className="text-black font-semibold">
                                {" "}
                                Category:{" "}
                              </span>{" "}
                              {trend.category}
                            </p>
                            <p className="text-[12px] text-gray-500 ">
                              <span className="text-black font-semibold">
                                {" "}
                                Total Views:{" "}
                              </span>{" "}
                              {trend.reads.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </section>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </main>

      <CustomModal open={open} handleClose={handleClose} width="lg">
        <div>hello</div>
      </CustomModal>
    </React.Fragment>
  );
};

export default DashboardComponent;
