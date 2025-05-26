import { useAnalyticsData } from "../../services/analytics/analytics";
import { analyticsData } from "../../utils/data";
import { formatDate } from "../../utils/date";
import CustomTable from "../common/CustomTable";
import HeaderText from "../common/HeaderText";
import DashboardLayout from "../layout/DashboardLayout";
import { TableLoader } from "../loaders";
import MonthlyAnalytics from "./Analytics";
import CategoryDoughnutChart from "./CategoryChart";

const AnalyticsAndReportsComponent = () => {
  const { getTopPerformingNews } = useAnalyticsData();
  const { data: perfomingNewsData, isPending } = getTopPerformingNews;

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
      Header: "Created By",
      accessor: "createdBy",
    },
    {
      Header: "Date Created",
      accessor: "createdAt",
      Cell: ({ value }: { value: string }) => formatDate(value),
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
          {isPending ? (
            <TableLoader />
          ) : (
            <CustomTable
              columns={column}
              data={perfomingNewsData ?? analyticsData}
            />
          )}
        </section>
      </DashboardLayout>
    </div>
  );
};

export default AnalyticsAndReportsComponent;
