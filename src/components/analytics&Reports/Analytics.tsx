import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useAnalyticsData } from "../../services/analytics/analytics";
import { ChartLoader } from "../loaders";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MonthlyAnalytics = () => {
  const { getMontlyViews } = useAnalyticsData();
  const { data: monthlyData, isPending } = getMontlyViews;

  // Extract month names and view counts from API response
  const months = monthlyData?.data?.data[0]?.months || [];
  const viewCounts = months.map(
    (month: { totalViews: number[] }) => month.totalViews
  );

  const maxValues = Math.max(...viewCounts);

  const data = {
    labels: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ],
    datasets: [
      {
        label: "Monthly Views",
        data: viewCounts ?? [],
        borderColor: "#1C64F2",
        pointRadius: 5,
      },
      {
        label: "",
        data: [],
        borderColor: "",
        pointRadius: 5,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        // grid: {
        //   display: false,
        // },
        border: {
          display: false,
        },
        min: 0,
        max: maxValues + 200,
        ticks: {
          stepSize: 20,
          padding: 30,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    tooltip: {
      backgroundColor: "#ffffff", // Set tooltip background color to white
      titleColor: "#000000", // Optional: Set title color to black for better readability
      bodyColor: "#000000", // Optional: Set body color to black for better readability
      borderColor: "#cccccc", // Optional: Add border color to tooltip
      borderWidth: 1, // Optional: Set border width
    },
  };
  return (
    <div className="bg-[#ffffff] rounded-[14px]   h-[auto]">
      <div className="h-[400px]  bg-[#ffffff] shadow-xl  py-8 rounded-[14px] px-5">
        <h2 className="text-[20px] font-bold leading-6 text-primary">
          Monthly views
        </h2>
        {isPending ? <ChartLoader /> : <Line data={data} options={options} />}
      </div>
    </div>
  );
};

export default MonthlyAnalytics;
