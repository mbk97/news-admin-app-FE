import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import ManageArticles from "./pages/ManageArticles";
import AnalyticsAndReports from "./pages/AnalyticsAndReports";
import UserManagement from "./pages/UserManagement";
import Settings from "./pages/Settings";
import AuditLog from "./pages/AuditLog";
import ProtectedRoute from "./components/common/ProtectedRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<ForgotPassword />} path="/forgot-password" />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route index path="/manage-articles" element={<ManageArticles />} />
          <Route
            index
            path="/analytics-reports"
            element={<AnalyticsAndReports />}
          />
          <Route index path="/user-management" element={<UserManagement />} />
          <Route index path="/activity-log" element={<AuditLog />} />
          <Route index path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
