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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const MonthlyAnalytics = () => {
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
        // data: customerCount,
        data: [300, 388, 100, 170, 200, 10, 200, 230, 190, 179, 223, 109],
        borderColor: "#1C64F2",
        pointRadius: 5, // Hide the points
      },
      {
        label: "",
        // data: defectCount,
        data: [],
        borderColor: "",
        pointRadius: 5, // Hide the points
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
        min: 100,
        max: 600,
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
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default MonthlyAnalytics;
