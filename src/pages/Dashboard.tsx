import DashboardComponent from "../components/dashboard/DashboardComponent";
import DashboardLayout from "../components/layout/DashboardLayout";

const Dashboard = () => {
  return (
    <div>
      <DashboardLayout>
        <DashboardComponent />
      </DashboardLayout>
    </div>
  );
};

export default Dashboard;
