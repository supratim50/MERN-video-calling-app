import React from "react";
import "./SquareButton.css";

const SquareButton = ({ icon, classList, text }) => {
  return (
    <div className="square__button d-flex flex-column align-items-center">
      <div
        className={`button color_white p-4 d-flex justify-content-center align-items-center ${
          classList ? classList : ""
        }`}
      >
        {icon}
      </div>
      <p className="mt-3 paragraph__text font-weight-bold">{text}</p>
    </div>
  );
};

export default SquareButton;
