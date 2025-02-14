import { analyticsData } from "../../utils/data";
import CustomTable from "../common/CustomTable";
import HeaderText from "../common/HeaderText";
import DashboardLayout from "../layout/DashboardLayout";
import MonthlyAnalytics from "./Analytics";
import CategoryDoughnutChart from "./CategoryChart";

const AnalyticsAndReportsComponent = () => {
  const column = [
    {
      Header: "News Title",
      accessor: "newsTitle",
    },
    {
      Header: "News Category",
      accessor: "category",
    },
    {
      Header: "Number of Views",
      accessor: "views",
    },
    {
      Header: "Date Created",
      accessor: "dateCreated",
    },
  ];

  return (
    <div>
      <DashboardLayout>
        <div className="flex items-center justify-between">
          <HeaderText text="Analytics & Reports" />
        </div>

        <section className="mt-8 bg-white rounded-md p-5">
          <div className="flex items-center gap-5 flex-wrap lg:flex-nowrap">
            <div className="lg:w-[60%] w-[100%]">
              <MonthlyAnalytics />
            </div>
            <div className="lg:w-[40%] w-[100%]">
              <CategoryDoughnutChart />
            </div>
          </div>
        </section>
        <section className="mt-8  bg-white rounded-md p-5">
          <HeaderText text="Top Performing Posts" />
          <CustomTable columns={column} data={analyticsData} />
        </section>
      </DashboardLayout>
    </div>
  );
};

export default AnalyticsAndReportsComponent;
