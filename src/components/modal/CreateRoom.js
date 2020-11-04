import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CreateRoom.css";

// components
import Input from "../input/input";
import PrimaryButton from "../buttons/primaryButton/PrimaryButton";

const CreateRoom = ({ show, onclick }) => {
  const [room, setRoom] = useState("");
  useEffect(() => {
    console.log(room);
  }, [room]);

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
        <Link>
          <PrimaryButton bgBlue text="Create" />
        </Link>
      </div>
    </>
  );
};

export default CreateRoom;
