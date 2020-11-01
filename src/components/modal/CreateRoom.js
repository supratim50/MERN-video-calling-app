import React from "react";
import "./CreateRoom.css";

// components
import Input from "../input/input";
import PrimaryButton from "../buttons/primaryButton/PrimaryButton";

const CreateRoom = ({ show }) => {
  return (
    <div
      className={`create_room__modal-background d-flex justify-content-center align-items-center ${
        show ? "show" : ""
      }`}
    >
      <div className="create_room__modal p-4 bg-white rounded-lg">
        <p className="text__paragraph font-weight-bold mb-4">
          Create Your Own Room
        </p>
        <Input classList="mb-4" placeholder="Create Room" />
        <PrimaryButton bgBlue text="Create" />
      </div>
    </div>
  );
};

export default CreateRoom;
