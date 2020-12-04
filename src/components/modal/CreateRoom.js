import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import "./CreateRoom.css";

// components
import Input from "../input/input";
import PrimaryButton from "../buttons/primaryButton/PrimaryButton";

const CreateRoom = ({ show, onclick }) => {
  const [room, setRoom] = useState("");

  return (
    <>
      {/* modal background */}
      <div
        className={`create_room__modal-background ${show ? "showModal" : ""}`}
        onClick={onclick}
      ></div>
      {/* modal box */}
      <div
        className={`create_room__modal p-4 bg-white rounded-lg ${
          show ? "showModal" : ""
        }`}
      >
        <p className="text__paragraph font-weight-bold mb-4">
          Create Your Own Room
        </p>
        <Input classList="mb-4" placeholder="Room Name" setroom={setRoom} />
        <Link
          onClick={(e) => {
            if (!room) {
              e.preventDefault();
            }
          }}
          to={`/meeting?room=${room}&roomId=${v4()}`}
        >
          <PrimaryButton bgBlue text="Create" />
        </Link>
      </div>
    </>
  );
};

export default CreateRoom;
