import React from "react";
import "./input.css";

const Input = ({ placeholder, classList, setroom }) => {
  return (
    <input
      className={`input py-3 px-4 w-100 ${classList ? classList : ""}`}
      type="text"
      placeholder={placeholder}
      onChange={(e) => setroom(e.target.value)}
    />
  );
};

export default Input;
