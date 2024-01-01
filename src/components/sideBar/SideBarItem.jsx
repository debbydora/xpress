import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const SideBarItem = ({ barItem }) => {
    const { setSelected } = useAuth();
  const defaultClass = "flex w-full justify-start items-center gap-[16px]  my-[2rem] pl-4 py-2 text-base hover:bg-lightBlue cursor-pointer transition-all duration-[200ms] ease-in-out transform hover:scale-[.98]";
  
    const handleItemClick = () => {
      setSelected(barItem.title);
    };

  return (
    <NavLink
      to={barItem.route}
      className={({ isActive }) =>
        isActive
          ? `${defaultClass} text-primary border-l-4 border-primary h-[48px] bg-lightBlue rounded-lg`
          : defaultClass
      }
      onClick={handleItemClick}
    >
      {barItem.icon}

      <span className="text-sm">{barItem.title}</span>
    </NavLink>
  );
};

export default SideBarItem;
