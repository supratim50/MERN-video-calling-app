import React from "react";
import "./chatList.css";

const ChatList = ({ name, text, rightChat }) => {
  return (
    <div className="d-flex flex-column">
      <p className={`mb-1 ${rightChat ? "right-text" : "left-text"}`}>{name}</p>
      <div
        className={`chat-box px-3 py-2 mb-2 d-inline-block shadow-sm ${
          rightChat ? "right-chat" : "left-chat"
        }`}
      >
        {text && text}
      </div>
    </div>
  );
};

export default ChatList;
