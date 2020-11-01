import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Peer from "peerjs";
import "./Meeting.css";

// context
import { useDataLayerValue } from "../../DataLayer";
import { getUser } from "../../getUser";

// components
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sideBar/Sidebar";

// functions
import { addVideo } from "../../addVideoFuncs";

const Meeting = () => {
  const [show, setShow] = useState(false);
  // will work
  const [openChat, setOpenChat] = useState(false);
  const [openParticipants, setOpenParticipants] = useState(false);

  const showSidebar = () => {
    setShow(!show);
    console.log(show);
  };

  const [state, dispatch] = useDataLayerValue();
  useEffect(() => {
    const { name, imageUrl } = getUser(dispatch);

    // selecting the vedio div
    const videoGrid = document.querySelector(".vedio__box");
    const myVideo = document.createElement("video");
    myVideo.classList.add("video");

    // connect to the server
    const ENDPOINT = "http://localhost:4000";

    // connect with our backend
    const socket = io.connect(ENDPOINT);

    // video calling features
    const peer = new Peer(undefined, {
      path: "/peerjs",
      host: "localhost",
      port: "4000",
    });

    // // peer
    peer.on("open", (id) => {
      socket.emit("newUserJoin", { name, imageUrl }, id);
    });

    // useing media devices for getting the vedio
    let myVideoStream; // it's for mute unmute purpose
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        addVideo(myVideo, stream, videoGrid);

        // answer to another person
        peer.on("call", (call) => {
          call.answer(stream);
          const video = document.createElement("video");
          call.on("stream", (userVideoStream) => {
            // Show stream in <video> element.
            addVideo(video, userVideoStream, videoGrid);
          });
        });

        // now i have to create room id using uuid in node js then and try to connect with the server
      });

    // connect to new user
    const connectToNewUser = (userId, stream) => {
      // call to another person
      const call = peer.call(userId, stream);
      const video = document.createElement("video");
      call.on("stream", (userVideoStream) => {
        // Show stream in <video> element.
        addVideo(video, userVideoStream, videoGrid);
      });
    };
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
