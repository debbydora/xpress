import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "../pages/signup/Signup";
import Login from "../pages/login/Login";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/dashboard/Dashboard";
import Deal from "../pages/dashboard/Deal";
import Transactions from "../pages/dashboard/Transactions";
import ProtectedRoutes from "./ProtectedRoutes";
import SideBarLayout from "../layout/SideBarLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SideBarLayout />,
    children: [
      {
        element: <ProtectedRoutes />,
        children: [
          { path: "dashboard", element: <Dashboard /> },
          { path: "deals", element: <Deal /> },
          { path: "transactions", element: <Transactions /> },
        ],
      },
    ],
  },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
  { path: "*", element: <NotFound /> },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
