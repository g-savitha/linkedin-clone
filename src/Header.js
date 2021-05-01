import React from "react";
import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import NotificationsIcon from "@material-ui/icons/Notifications";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import HeaderOption from "./HeaderOption";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.fpsa.org/wp-content/uploads/linkedin-logo-copy.png"
          alt="linkedin-logo"
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" name="" id="" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOption title="Messaging" Icon={ChatIcon} />
        <HeaderOption title="Notifications" Icon={NotificationsIcon} />
        <HeaderOption
          title="Me"
          avatar={
            "https://images.unsplash.com/photo-1531436062681-6e2a24161410?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZlcnJhcml8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
          }
        />
      </div>
    </div>
  );
}

export default Header;
