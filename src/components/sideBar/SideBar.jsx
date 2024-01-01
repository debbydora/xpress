import React from "react";
import { AiOutlineTeam, AiOutlineTags } from "react-icons/ai";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { PiMoney } from "react-icons/pi";
import Logo from "../../icons/Logo.svg";
import SideBarItem from "./SideBarItem";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const { Logout } = useAuth();
  const navigate = useNavigate();
  const sideBarArr = [
    {
      icon: <AiOutlineTeam size="25px" />,
      title: "Verifiers",
      route: "/dashboard",
    },
    {
      icon: <AiOutlineTags size="25px" />,
      title: "Deals",
      route: "/deals",
    },
    {
      icon: <PiMoney size="25px" />,
      title: "Transactions",
      route: "/transactions",
    },
  ];

  const handleLogout = () => {
    Logout();
    navigate("/login");
  };
  return (
    <div className="bg-white  w-[20%] hidden top-0 sticky lg:block h-screen box-border py-[3rem] px-6 shadow-custom-light ">
      <img src={Logo} alt="brand-logo" />
      <div className="mt-16">
        {sideBarArr.map((barItem, index) => (
          <SideBarItem key={index} barItem={barItem} />
        ))}
      </div>
      <div
        className="flex items-center gap-2 pl-4 font-semibold  absolute bottom-10 cursor-pointer text-red-400"
        onClick={handleLogout}
      >
        <LiaSignOutAltSolid size="25px" />
        <p className="text-sm">Logout</p>
      </div>
    </div>
  );
};

export default SideBar;
