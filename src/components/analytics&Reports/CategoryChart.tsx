import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const CategoryDoughnutChart = () => {
  const data = {
    labels: ["Technology", "Health", "Finance", "Sports", "Entertainment"],
    datasets: [
      {
        label: "Category Views",
        data: [45, 30, 25, 20, 50], // Example data for views
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
        hoverOffset: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="">
      <div className="h-[400px] bg-[#ffffff] shadow-xl  py-8 rounded-[14px] px-5">
        <h2 className="text-[20px] font-bold leading-6 text-primary">
          Monthly category views
        </h2>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default CategoryDoughnutChart;
