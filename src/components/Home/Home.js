import React from "react";
import io from "socket.io-client";

const Home = ({ userName, imageUrl }) => {
  const ENDPOINT = "http://localhost:4000";

  // connect with our backend
  const socket = io.connect(ENDPOINT);

  socket.emit("newUserJoin", { userName, imageUrl });

  return (
    <div>
      <h1>This is home page</h1>
    </div>
  );
};

export default Home;
