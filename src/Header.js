import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import linkdnicon from "../src/linkdnimage.png";
import HeaderOption from "./HeaderOption";
import CottageIcon from "@mui/icons-material/Cottage";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={linkdnicon} alt="linkdn" />

        <div className="header__search">
          {/* SearchIcon */}
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={CottageIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
      </div>
    </div>
  );
}

export default Header;
