import React from "react";
import "./button.css";

const Button = ({ icon, classList }) => {
  return (
    <div
      className={`button p-3 d-flex align-items-center rounded-circle ${
        classList ? classList : ""
      }`}
    >
      {icon && icon}
    </div>
  );
};

export const CornerRoundButton = ({ classList, content }) => {
  return (
    <div
      style={{ fontSize: 25, letterSpacing: 3, borderRadius: 10 }}
      className={`font-weight-bold d-flex align-items-center justify-content-center ${
        classList ? classList : ""
      }`}
    >
      {content && content}
    </div>
  );
};

export default Button;
