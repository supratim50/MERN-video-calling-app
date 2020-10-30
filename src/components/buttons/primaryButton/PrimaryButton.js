import React from "react";
import "./PrimaryButton.css";

const PrimaryButton = ({ classList, text, onClick, active }) => {
  return (
    <div
      className={`button_primary paragraph__text border-sm bg-white flex-fill d-flex justify-content-center align-items-center font-weight-bold ${
        classList ? classList : ""
      } ${active ? "color_primary" : ""}`}
      onClick={onClick && onClick}
    >
      {text && text}
    </div>
  );
};

export default PrimaryButton;
