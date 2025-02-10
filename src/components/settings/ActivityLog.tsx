import { activityLogData } from "../../utils/data";
import { CustomButton } from "../common/CustomButton";
import CustomInput from "../common/CustomInput";
import CustomTable from "../common/CustomTable";
import HeaderText from "../common/HeaderText";

const ActivityLog = () => {
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
      Header: "Date",
      accessor: "date",
    },
  ];

  return (
    <div>
      <HeaderText text="Activity Log" />
      <section className="mt-[20px]">
        <div className="flex gap-5 items-center flex-wrap lg:flex-nowrap">
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
        </div>

        <div className="mt-[40px]">
          <CustomTable columns={column} data={activityLogData} />
        </div>
      </section>
    </div>
  );
};

export default ActivityLog;
