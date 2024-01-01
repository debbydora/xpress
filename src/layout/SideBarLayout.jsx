import ProfileHeader from "../components/ProfileHeader";
import SideBar from "../components/sideBar/SideBar";
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const SideBarLayout = () => {
  return (
    <>
      <div className="flex h-screen overflow-hidden bg-[#F5F6F8]">
        <SideBar />
        <div className="flex flex-col w-full overflow-hidden">
          <ProfileHeader />
          <div className="md:p-8 p-3 overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBarLayout;
