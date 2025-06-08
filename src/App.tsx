import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import ManageArticles from "./pages/ManageArticles";
import AnalyticsAndReports from "./pages/AnalyticsAndReports";
import UserManagement from "./pages/UserManagement";
import Settings from "./pages/Settings";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<ForgotPassword />} path="/forgot-password" />
        <Route path="/reset-password/:resetToken" element={<ResetPassword />} />
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
      </Routes>
    </div>
  );
}

export default App;
