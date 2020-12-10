import React, { useState, useEffect } from "react";
import "./Sidebar.css";

// components
import PrimaryButton from "../buttons/primaryButton/PrimaryButton";
import { useDataLayerValue } from "../../DataLayer";

const Sidebar = () => {
  const [{ showChatBox, showParticipants }, dispatch] = useDataLayerValue();

  const [openChat, setOpenChat] = useState(false);
  const [openParticipants, setOpenParticipants] = useState(false);

  // open chat box function
  const openChatFunc = () => {
    // set the reducer
    setOpenChat(showChatBox);
  };

  // open participants box function
  const openParticipantsFunc = () => {
    // set the reducer
    setOpenParticipants(showParticipants);
  };

  // chat useEffect
  useEffect(() => {
    openChatFunc();
  }, [showChatBox]);
  // participants useEffect
  useEffect(() => {
    openParticipantsFunc();
  }, [showParticipants]);

  return (
    <div
      className={`side__bar h-100 p-3 ml-2 bg_color_light_grey flex-column ${
        openChat || openParticipants ? "show" : ""
      }`}
    >
      {/* ==================== buttons ======================== */}
      {/* chat active */}
      <div className="d-flex justify-content-between">
        {openChat ? (
          <PrimaryButton text="Chat" active onClick={openChatFunc} />
        ) : (
          <PrimaryButton text="Chat" onClick={openChatFunc} />
        )}

        {/* participants active */}
        {openParticipants ? (
          <PrimaryButton
            classList="ml-3"
            active
            text="Participants"
            onClick={openParticipantsFunc}
          />
        ) : (
          <PrimaryButton
            classList="ml-3"
            text="Participants"
            onClick={openParticipantsFunc}
          />
        )}
      </div>

      {/* ================= chats ========================== */}
      {openChat ? (
        <div className="flex-fill d-flex flex-column mt-3 border border-danger">
          <div className="flex-fill border border-success">
            <h3>This is Chat Box</h3>
          </div>
          <div className="pt-3">
            <h4>This is Send Box</h4>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* ======================== participants ======================= */}
      {openParticipants ? (
        <div className="flex-fill d-flex flex-column mt-3 border border-danger">
          <div className="flex-fill border border-success">
            <h3>This is Participants Box</h3>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Sidebar;
