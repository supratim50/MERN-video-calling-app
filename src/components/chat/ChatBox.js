import React from "react";

import Chat from "../Lists/chatList/chatList";
import ChatInput from "../input/chatInput/ChatInput";

const ChatBox = () => {
  return (
    <div className="flex-fill d-flex flex-column mt-3">
      <div className="flex-fill d-flex flex-column">
        <Chat classList="right-chat" text=" hey how are you ?" />
        <Chat classList="left-chat" text="I'm fine" />
      </div>
      <div className="pt-3">
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatBox;
