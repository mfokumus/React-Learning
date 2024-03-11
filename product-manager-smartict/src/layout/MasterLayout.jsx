import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/sidebar/SideBar";
import "../styles/main.css";

const MasterLayout = () => {
  return (
    <div className="flex h-full">
      <div className="layout-sidebar">
        <SideBar />
      </div>
      <div className="layout-main">
        <Outlet />
      </div>
    </div>
  );
};

export default MasterLayout;
