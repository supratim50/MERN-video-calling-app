import React, { useState, useEffect, useRef, useContext } from "react";

import Chat from "../Lists/chatList/chatList";
import ChatInput from "../input/chatInput/ChatInput";

// context
import { MessagesContext } from "../../contexts/messageContext";
import { SocketIoContext } from "../../contexts/SocketContext";

const ChatBox = () => {
  // state
  const [message, setMessage] = useState("");
  // context for message
  const { messages, sendMessage } = useContext(MessagesContext);
  // context for socket
  const { socket } = useContext(SocketIoContext);

  // send message
  const send = (e) => {
    e.preventDefault();

    if (message) {
      sendMessage(message);
    }
    setMessage("");
  };

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  return (
    <div className="flex-fill d-flex flex-column mt-3">
      <div className="flex-fill d-flex flex-column">
        {messages.map(({ msg, senderData }, index) => {
          const { name, userId } = senderData;
          if (userId === socket.id) {
            return <Chat key={index} rightChat text={msg} name={name} />;
          } else {
            return <Chat key={index} leftChat text={msg} name={name} />;
          }
        })}
      </div>
      <div className="pt-3">
        <ChatInput
          sendMessage={send}
          setMessage={setMessage}
          message={message}
        />
      </div>
    </div>
  );
};

export default ChatBox;
