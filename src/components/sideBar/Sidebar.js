import React, { useState, useEffect } from "react";
import "./Sidebar.css";

// components
import PrimaryButton from "../buttons/primaryButton/PrimaryButton";
import ProfileList from "../Lists/ProfileList/profileList";
import { useDataLayerValue } from "../../DataLayer";
import ChatBox from "../chat/ChatBox";

const Sidebar = () => {
  const [state, dispatch] = useDataLayerValue();

  const [openChat, setOpenChat] = useState(false);
  const [openParticipants, setOpenParticipants] = useState(false);
  const [usersInRoom, setUsersinRoom] = useState([]);

  // open chat box function
  const openChatFunc = () => {
    setOpenChat(state.showChatBox);
  };

  // open participants box function
  const openParticipantsFunc = () => {
    setOpenParticipants(state.showParticipants);
  };

  // =============== chat useEffect
  useEffect(() => {
    openChatFunc();
  }, [state.showChatBox]);
  // =============== participants useEffect
  useEffect(() => {
    openParticipantsFunc();
  }, [state.showParticipants]);
  // =============== fetching participants
  useEffect(() => {
    setUsersinRoom(state.allUsers);
  }, [state.allUsers]);

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
      {openChat ? <ChatBox /> : ""}

      {/* ======================== participants ======================= */}
      {openParticipants ? (
        <div className="flex-fill d-flex flex-column mt-3">
          <div className="flex-fill">
            {usersInRoom.map((user, index) => {
              console.log(user);
              return <ProfileList key={index} userDetails={user} />;
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Sidebar;
