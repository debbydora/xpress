import { AiOutlineTeam, AiOutlineTags } from "react-icons/ai";
import { PiMoney } from "react-icons/pi";

export const sideBarArr = [
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
