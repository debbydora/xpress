import React from "react";
import { useAuth } from "../context/AuthContext";
import alertiIcon from "../icons/Alert.svg";
import { HiChevronDown } from "react-icons/hi2";
import { sideBarArr } from "./sideBar/SideBarArray";
import { LiaSignOutAltSolid } from "react-icons/lia";
import SideBarItem from "./sideBar/SideBarItem";
import { useNavigate } from "react-router-dom";
import Harmburger from "./Harmburger";

const ProfileHeader = () => {
  const { getSelectedTitle, getUser, getDataNum, Logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);
  const selectedTitle = getSelectedTitle();
  const dataNum = getDataNum();
  const authenticatedUser = getUser();

  const toggle = () => setIsOpen(!isOpen);

  const hide = () => setIsOpen(false);

  const handleLogout = () => {
    Logout();
    navigate("/login");
  };

  return (
    <div className="flex flex-row justify-between items-center sticky z-50   px-8 py-4 w-full font-quicksand bg-white">
      <div className="flex items-center gap-2">
        <p className="font-bold text-textBlack text-[24px]">{selectedTitle}</p>
        <div className="bg-lightBlue w-8 h-8 p-2 rounded-full text-primary text-xs text-center">
          <p>{dataNum}</p>
        </div>
      </div>
      <div className="flex items-center md:gap-x-6 gap-x-4">
        <img src={alertiIcon} alt="alert" />
        <div className="flex md:gap-x-2 gap-x-4 items-center">
          <div className="h-[44px] w-[44px] md:ml-0 -ml-3">
            <img
              src={authenticatedUser?.image}
              alt="profile"
              className="h-[44px] w-[44px] rounded-full border-[#F2FAFF]"
            />
          </div>
          <HiChevronDown className="hidden md:block" />
        </div>
      </div>

      <div className="absolute right-0 top-4 md:top-6 cursor-pointer lg:hidden md:block">
        <Harmburger onClick={toggle} isOpen={isOpen} />
      </div>
      <div
        onClick={hide}
        className={`${
          isOpen ? "translate-x-0" : "translate-x-[-100vw]"
        } fixed z-10 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center cursor-pointer overflow-y-auto lg:hidden`}
      >
        <div
          className={`${
            isOpen ? "translate-x-0" : "translate-x-[-100vw]"
          } flex bg-white flex-col gap-y-4 absolute z-50 top-0 left-0 right-0 w-[50%]  transition duration-[600ms]  lg:hidden `}
        >
          <div className="bg-headerbg h-screen">
            <p
              onClick={hide}
              className="text-black text-2xl my-2 mx-2 flex justify-end font-bold"
            >
              X
            </p>

            <div className="my-[2rem]">
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
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
