import { Route, Routes } from "react-router-dom";
import "./App.css";

// Pages
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import ManageArticles from "./pages/ManageArticles";
import AnalyticsAndReports from "./pages/AnalyticsAndReports";
import UserManagement from "./pages/UserManagement";
import Settings from "./pages/Settings";
import AuditLog from "./pages/AuditLog";
import Unauthorized from "./pages/Unauthorized";
// Route Guard
import ProtectedRoute from "./components/common/ProtectedRoute";
import { ROLES } from "./constants/role";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<ForgotPassword />} path="/forgot-password" />
        <Route element={<ResetPassword />} path="/reset-password/:resetToken" />
        <Route
          index
          path="/dashboard"
          element={
            // <ProtectedRoute>
            <Dashboard />
            // </ProtectedRoute>
          }
        />
        <Route
          index
          path="/manage-articles"
          element={
            // <ProtectedRoute>
            <ManageArticles />
            // </ProtectedRoute>
          }
        />
        <Route
          index
          path="/analytics-reports"
          element={
            // <ProtectedRoute>
            <AnalyticsAndReports />
            // </ProtectedRoute>
          }
        />
        <Route
          index
          path="/user-management"
          element={
            // <ProtectedRoute>
            <UserManagement />
            // </ProtectedRoute>
          }
        />
        <Route
          index
          path="/settings"
          element={
            // <ProtectedRoute>
            <Settings />
            // </ProtectedRoute>
          }
        />
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Authenticated Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/manage-articles" element={<ManageArticles />} />
          <Route path="/analytics-reports" element={<AnalyticsAndReports />} />
          <Route path="/settings" element={<Settings />} />

          {/* Role-Specific Route */}
          <Route element={<ProtectedRoute allowedRoles={[ROLES.ADMIN]} />}>
            <Route path="/user-management" element={<UserManagement />} />
          </Route>
          <Route element={<ProtectedRoute allowedRoles={[ROLES.ADMIN]} />}>
            <Route path="/activity-log" element={<AuditLog />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
