import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signup from "../pages/signup/Signup";
import Login from "../pages/login/Login";
import NotFound from "../pages/NotFound";
import SideBarLayout from "../layout/SideBarLayout";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import Deal from "../pages/dashboard/Deal";
import Transactions from "../pages/dashboard/Transactions";
import ProtectedRoutes from "./ProtectedRoutes";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <SideBarLayout />
            </ProtectedRoutes>
          }
        >
          <Route
            index
            element={
              <ProtectedRoutes>
                <DashboardLayout />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoutes>
                <Dashboard />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/deals"
            element={
              <ProtectedRoutes>
                <Deal />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/transactions"
            element={
              <ProtectedRoutes>
                <Transactions />
              </ProtectedRoutes>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default Router;
