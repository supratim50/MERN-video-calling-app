import React from "react";
import "./PrimaryButton.css";

const PrimaryButton = ({ classList, text }) => {
  return (
    <div
      className={`button_primary paragraph__text border-sm bg-white flex-fill d-flex justify-content-center align-items-center font-weight-bold ${
        classList ? classList : ""
      }`}
    >
      {text && text}
    </div>
  );
};

export default PrimaryButton;
