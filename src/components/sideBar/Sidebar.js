import React from "react";
import "./Sidebar.css";

// components
import PrimaryButton from "../buttons/primaryButton/PrimaryButton";

const Sidebar = () => {
  return (
    <div
      className={`border border-danger h-100 side__bar p-3 sidebar ml-2 bg_color_light_grey`}
    >
      <div className="d-flex justify-content-between">
        <PrimaryButton text="Chat" />
        <PrimaryButton classList="ml-3" text="Perticipate" />
      </div>
    </div>
  );
};

export default Sidebar;
