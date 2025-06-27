import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { IoFilter } from "react-icons/io5";
import { useState } from "react";
import { useAnalyticsData } from "../../services/analytics/analytics";
import { Modal } from "../common/Modal";
import { ChartLoader } from "../loaders";

ChartJS.register(ArcElement, Tooltip, Legend);

const CategoryDoughnutChart = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const [openFilterModalForCategory, setOpenFilterModalForCategory] =
    useState<boolean>(false);
  const [month, setMonth] = useState<number>(currentMonth);

  const { getMonthlyCategoryViewsData } = useAnalyticsData({
    month,
  });
  const { data: monthlyCategory, isPending } = getMonthlyCategoryViewsData;

  // Extract category names and view counts
  const categoryNames =
    monthlyCategory?.categories?.map(
      (item: { categoryName: string }) => item.categoryName
    ) || [];
  const viewCounts =
    monthlyCategory?.categories?.map((item: { views: number }) => item.views) ||
    [];

  const getCurrentMonthName = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[month - 1];
  };

  const handleOpen = () => setOpenFilterModalForCategory(true);
  const handleClose = () => setOpenFilterModalForCategory(false);

  const months = [
    { value: 1, label: "January" },
    { value: 2, label: "February" },
    { value: 3, label: "March" },
    { value: 4, label: "April" },
    { value: 5, label: "May" },
    { value: 6, label: "June" },
    { value: 7, label: "July" },
    { value: 8, label: "August" },
    { value: 9, label: "September" },
    { value: 10, label: "October" },
    { value: 11, label: "November" },
    { value: 12, label: "December" },
  ];

  const data = {
    labels: categoryNames,
    datasets: [
      {
        label: "Category Views",
        data: viewCounts,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#FF69B4",
          "#FF4500",
          "#32CD32",
          "#FFA07A",
          "#8A2BE2",
        ],
        hoverOffset: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMonth = Number(e.target.value);
    setMonth(selectedMonth);
    setOpenFilterModalForCategory(false);
  };

  console.log(monthlyCategory, viewCounts);

  return (
    <div className="">
      <div className="h-[400px] bg-[#ffffff] shadow-xl py-8 rounded-[14px] px-5">
        <div className="flex items-center justify-between">
          <h2 className="text-[14px] font-bold leading-6 text-primary">
            {getCurrentMonthName()} category views
          </h2>
          <IoFilter onClick={handleOpen} className="cursor-pointer" />
        </div>
        {isPending ? (
          <ChartLoader />
        ) : viewCounts.every((count: number) => count === 0) ? (
          <div className="flex items-center justify-center h-[80%]">
            <p className="text-gray-500 font-medium text-center">
              No views recorded for {getCurrentMonthName()}
            </p>
          </div>
        ) : (
          <Doughnut data={data} options={options} />
        )}
      </div>

      <Modal
        isOpen={openFilterModalForCategory}
        onClose={handleClose}
        width="290px"
      >
        <div>
          <p className="font-semibold text-[12px] text-primary">
            Filter Category By Month
          </p>
          <div className="mt-4">
            <div className="relative">
              <label
                htmlFor="month"
                className="mb-3 block text-[12px] font-medium"
              >
                Select Month
              </label>
              <select
                name="month"
                id="month"
                value={month}
                onChange={handleMonthChange}
                className="w-[100%] text-[12px] border-[#D1D5DB] rounded-[8px] h-[45px] outline-primary px-[20px] border bg-[#f9fafb]"
              >
                {months.map((m) => (
                  <option key={m.value} value={m.value}>
                    {m.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CategoryDoughnutChart;
