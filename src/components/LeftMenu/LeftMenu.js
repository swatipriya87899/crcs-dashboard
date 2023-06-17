import React from "react";
import "./LeftMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCalendarDays ,
  faBullhorn,
  faIndianRupeeSign,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import Hr from "../Hr/Hr";

const LeftMenu = () => {
  let items = [
    {
      content: "Home",
      icon: faHome,
    },
    {
      content: "Registeration Request",
      icon: faCalendarDays,
    },
    {
      content: "Notification",
      icon: faBullhorn ,
    },
    {
      content: "Financial Report",
      icon: faIndianRupeeSign,
    },
    {
      content: "Log Out",
      icon: faPowerOff,
    },
  ];
  return (
    <div className="leftMenu">
      {items.map((menu) => (
        <>
          <div className="leftMenuContent">
            <FontAwesomeIcon icon={menu.icon} style={{ fontSize: "24px" }} />
            <span>{menu.content}</span>
          </div>
          <Hr />
        </>
      ))}
    </div>
  );
};

export default LeftMenu;
