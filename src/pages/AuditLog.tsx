import DashboardLayout from "../components/layout/DashboardLayout";
import ActivityLog from "../components/settings/ActivityLog";

const AuditLog = () => {
  return (
    <div>
      <DashboardLayout>
        <ActivityLog />
      </DashboardLayout>
    </div>
  );
};

export default AuditLog;
