import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import "./App.css";
import linkdn_image from "../src/linkdn image.jpeg";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={linkdn_image} alt="linkdn_image" />
        <Avatar className="sidebar__avatar" />
        <h2>Daniel</h2>
        <h4>dezeugo8@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="stat__Number">2.543</p>
        </div>
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="stat__Number">2.543</p>
        </div>
      </div>

      <div className="sidebar-button">
        <p>Recent</p>
      </div>
    </div>
  );
}

export default SideBar;
