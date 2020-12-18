import React from "react";
import "./chatList.css";

const ChatList = ({ classList, text }) => {
  return (
    <div
      className={`chat-box px-3 py-2 mb-2 d-inline-block shadow-sm ${
        classList && classList
      }`}
    >
      {text && text}
    </div>
  );
};

export default ChatList;
