import React, { useState } from "react";
import "./SquareButton.css";

// components
import CreateRoom from "../../modal/CreateRoom";

const SquareButton = ({ icon, classList, text, clickable }) => {
  // state
  const [showCreateRoom, setShowCreateRoom] = useState(false);

  const showCreateRoomFunc = () => {
    setShowCreateRoom(!showCreateRoom);
  };

  return (
    <>
      <div
        className="square__button d-flex flex-column align-items-center"
        onClick={clickable && showCreateRoomFunc}
      >
        <div
          className={`button color_white p-4 d-flex justify-content-center align-items-center ${
            classList ? classList : ""
          }`}
        >
          {icon}
        </div>
        <p className="mt-3 paragraph__text font-weight-bold">{text}</p>
      </div>

      {/* create room meatting */}
      {showCreateRoom ? (
        <CreateRoom show onclick={showCreateRoomFunc} />
      ) : (
        <CreateRoom />
      )}
    </>
  );
};

export default SquareButton;
