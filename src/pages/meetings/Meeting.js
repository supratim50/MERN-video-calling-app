import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
// import Peer from "peerjs";
import queryString from "query-string";
import "./Meeting.css";

// context
import { useDataLayerValue } from "../../DataLayer";
import { getUser } from "../../getUser";

// components
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sideBar/Sidebar";

const Meeting = ({ location }) => {
  const [state, dispatch] = useDataLayerValue();
  const [show, setShow] = useState(false);
  const [peers, setPeers] = useState([]);
  const socketRef = useRef();
  const userVideo = useRef();
  const peersRef = useRef();

  const showSidebar = () => {
    setShow(!show);
  };

  useEffect(() => {
    const query = queryString.parse(location.search);
    const roomName = query.room;
    const roomID = query.roomId;
    socketRef.current = io.connect("/");
    socketRef.current.emit("join user", { roomID, roomName });
  }, []);

  return (
    <div className="meeting__page d-flex flex-column">
      <Navbar />
      <div className="container-fluid border pt-4 pb-3 mt-5 flex-fill d-flex overflow-hidden">
        <div className="meeting__box border border-danger h-100 flex-wrap flex-fill d-flex justify-content-center align-items-center">
          <div className="vedio__box p-1 d-flex justify-content-center"></div>
        </div>
        {show ? <Sidebar show /> : <Sidebar />}
      </div>

      <button onClick={showSidebar}>Click Here</button>
    </div>
  );
};

export default Meeting;
