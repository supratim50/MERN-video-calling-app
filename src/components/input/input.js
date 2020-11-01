import React from "react";
import "./input.css";

const Input = ({ placeholder, classList }) => {
  return (
    <input
      className={`input py-3 px-4 w-100 ${classList ? classList : ""}`}
      type="text"
      placeholder={placeholder}
    />
  );
};

export default Input;
