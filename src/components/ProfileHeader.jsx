import React from "react";
import { useAuth } from "../context/AuthContext";
import alertiIcon from "../icons/Alert.svg";
import profile from "../icons/Profile-Picture.jpg"
import { HiChevronDown } from "react-icons/hi2";

const ProfileHeader = () => {
  const { getSelectedTitle, getUser } = useAuth();
  const selectedTitle = getSelectedTitle();
  const authenticatedUser = getUser();

  return (
    <div className="flex flex-row justify-between items-center sticky z-50   px-8 py-4 w-full font-quicksand bg-white">
      <div>
        <p className="font-bold text-textBlack text-[24px]">{selectedTitle}</p>
      </div>
      <div className="flex items-center gap-x-6">
        <img src={alertiIcon} alt="alert" />
        <div className="flex gap-x-2 items-center">
          <div className="h-[44px] w-[44px]">
            <img
              src={authenticatedUser?.image}
              alt="profile"
              className="h-[44px] w-[44px] rounded-full border-[#F2FAFF]"
            />
          </div>
          <HiChevronDown />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
