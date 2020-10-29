import React from "react";
import "./Sidebar.css";

// components
import PrimaryButton from "../buttons/primaryButton/PrimaryButton";

const Sidebar = ({ show }) => {
  return (
    <div
      className={`side__bar border border-danger h-100 p-3 ml-2 bg_color_light_grey ${
        show ? "show" : ""
      }`}
    >
      <div className="d-flex justify-content-between">
        <PrimaryButton text="Chat" />
        <PrimaryButton classList="ml-3" text="Perticipate" />
      </div>
    </div>
  );
};

export default Sidebar;
