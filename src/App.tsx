import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<ForgotPassword />} path="/forgot-password" />
        <Route
          index
          path="/dashboard"
          element={
            // <ProtectedRoute>
            <Dashboard />
            // </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
