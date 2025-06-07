import { useState } from "react";
import { useUserManagement } from "../../services/roles/role";
import { CustomButton } from "../common/CustomButton";
import CustomInput from "../common/CustomInput";
import CustomTable from "../common/CustomTable";
import HeaderText from "../common/HeaderText";
import { TableLoader } from "../loaders";

const ActivityLog = () => {
  const [paginationData, setPaginationData] = useState({
    fullName: "",
    startDate: "",
    pageNo: 1,
    pageSize: 10,
  });

  const { pageSize } = paginationData;

  const paginationPayload = {
    userId: "",
    startDate: paginationData.startDate,
    endDate: "",
    page: paginationData.pageNo,
    limit: pageSize,
  };

  const { fetchUserActivities } = useUserManagement({
    searchParamsForPagination: paginationPayload,
  });
  const { data: activities, isFetching: userActivityLoading } =
    fetchUserActivities;

  const totalPages = activities?.pagination?.pages;
  const currentPage = activities?.pagination?.page;
  const totalItems = activities?.pagination?.total;
  const tableData = activities?.data || [];

  type Activity = {
    userId?: {
      fullname?: string;
      email?: string;
    };
    action?: string;
    details?: string;
    createdAt: string;
  };

  const activityLogData = tableData.map((activity: Activity) => {
    return {
      fullName: activity.userId?.fullname || "N/A",
      email: activity.userId?.email || "N/A",
      activity: activity.action || "N/A",
      details: activity.details || "N/A",
      date: new Date(activity.createdAt).toLocaleString(),
    };
  });
  const column = [
    {
      Header: "Full Name",
      accessor: "fullName",
    },
    {
      Header: "Email Address",
      accessor: "email",
    },
    {
      Header: "Activity",
      accessor: "activity",
    },
    {
      Header: "Details",
      accessor: "details",
    },
    {
      Header: "Date",
      accessor: "date",
    },
  ];

  const handleNext = () => {
    setPaginationData((prev) => ({
      ...prev,
      pageNo: prev.pageNo + 1,
    }));
  };

  const handlePrev = () => {
    setPaginationData((prev) => ({
      ...prev,
      pageNo: prev.pageNo > 1 ? prev.pageNo - 1 : 1,
    }));
  };

  return (
    <div>
      <HeaderText text="Activity Log" />
      <section className="mt-[20px]">
        <section className="mt-8  bg-white rounded-md p-5 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="w-full">
            <CustomInput
              type="text"
              name=""
              value=""
              label="Full Name"
              placeholder="Search by Name"
              handleChange={() => {}}
            />
          </div>
          <div className="w-full">
            <CustomInput
              type="date"
              name=""
              value=""
              label="Start Date"
              placeholder="Search by Email"
              handleChange={() => {}}
            />
          </div>
          <div className="w-full mr-3 mt-7">
            <CustomButton type="submit" text="Submit" />
          </div>
        </section>

        <section className="mt-8  bg-white rounded-md p-5">
          <HeaderText text="Activities" />
          {userActivityLoading ? (
            <TableLoader />
          ) : (
            <>
              <CustomTable columns={column} data={activityLogData ?? []} />
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
                      setPaginationData({
                        ...paginationData,
                        pageSize: Number(e.target.value),
                      })
                    }
                    className="text-sm border border-gray-300 rounded-md px-2 py-1 bg-white focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    {[5, 10, 20, 50].map((size) => (
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
      </section>
    </div>
  );
};

export default ActivityLog;
