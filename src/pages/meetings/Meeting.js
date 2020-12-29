import React, { useState, useEffect, useRef, useContext } from "react";
import queryString from "query-string";
import Peer from "simple-peer";
import "./Meeting.css";

// context
import { useDataLayerValue } from "../../contexts/DataLayer";
import { SocketIoContext } from "../../contexts/SocketContext";

// components
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sideBar/Sidebar";
import ControlBox from "../../components/controlBox/controlBox";

const videoConstraints = {
  height: "100%",
  width: "100%",
};

// -------------------------------- Child Component ---------------------------------------
const Video = ({ peer }) => {
  const ref = useRef();

  useEffect(() => {
    peer.on("stream", (stream) => {
      ref.current.srcObject = stream;
    });
  }, []);

  return <video className="video" ref={ref} autoPlay />;
};

// --------------------------------- Parent Component ---------------------------------------
const Meeting = ({ location }) => {
  // contexts
  const [state, dispatch] = useDataLayerValue();
  const { socket } = useContext(SocketIoContext);
  // peers
  const [peers, setPeers] = useState([]);
  // use refs
  const socketRef = useRef();
  const userVideo = useRef();
  const peersRef = useRef([]);
  const roomIdRef = useRef();

  useEffect(() => {
    // get the user data
    let profile = JSON.parse(localStorage.getItem("userProfile"));
    const name = profile.name;
    const imageUrl = profile.profile_img;
    // get the room data
    const query = queryString.parse(location.search);
    const roomName = query.room;
    roomIdRef.current = query.roomId;
    // connect with server
    socketRef.current = socket;
    // get the user media
    navigator.mediaDevices
      .getUserMedia({ video: videoConstraints, audio: true })
      .then((stream) => {
        userVideo.current.srcObject = stream;
        socketRef.current.emit("join user", {
          roomID: roomIdRef.current,
          roomName,
          name,
          imageUrl,
        });
        socketRef.current.on("all users", (userInThisRoom) => {
          console.log(userInThisRoom);
          // add all users to the reducer
          dispatch({
            type: "ADD_ALL_USERS",
            users: userInThisRoom,
          });
          const peers = [];
          // send the signal to all users in this room
          userInThisRoom.forEach((user) => {
            // create New Peer
            const peer = createNewPeer(
              user.userId,
              socketRef.current.id,
              stream
            );
            // push the peer
            peersRef.current.push({
              peerId: user.userId,
              peer, // peer : peer
            });
            peers.push({
              peerId: user.userId,
              peer,
            });
          });
          // set all the peers into to state
          setPeers(peers);
        });
        // =========== new user join =======
        socketRef.current.on("user join", (callerId, signal, callerData) => {
          console.log("new user joined !!", callerId, callerData);
          // add the callerdata to the reducer
          dispatch({
            type: "ADD_ALL_USERS",
            users: [callerData],
          });
          const peer = addPeer(callerId, signal, stream);
          // push the peer
          peersRef.current.push({
            peerId: callerId,
            peer,
          });
          const peerObj = {
            peerId: callerId,
            peer,
          };
          // set the state without changing others value
          setPeers((peers) => [...peers, peerObj]);
        });

        // ============= recieving signal =============
        socketRef.current.on("recieving returning signal", ({ signal, id }) => {
          const item = peersRef.current.find((peer) => peer.peerId === id);
          // peering caller signal
          item.peer.signal(signal);
        });

        console.log("peers", peers);

        // =============== user left ==================
        socketRef.current.on("user left", (id) => {
          // getting the peerObj from ref
          const peerObj = peersRef.current.find((peer) => peer.peerId === id);
          // destroy the peer
          if (peerObj) {
            peerObj.peer.destroy();
          }
          // set the peer
          const peers = peersRef.current.filter((peer) => peer.peerId !== id);
          peersRef.current = peers;
          setPeers(peers);
        });
      });
  }, []);

  // ==================== craete new peer ===============
  function createNewPeer(userToSignal, callerId, stream) {
    console.log("hey hey");
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    });

    peer.on("signal", (signal) => {
      socketRef.current.emit("sending signal", {
        userToSignal,
        callerId,
        signal,
        roomID: roomIdRef.current,
      });
    });

    return peer;
  }

  // =================== add new peer =========================
  function addPeer(callerId, incomingSignal, stream) {
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream,
    });

    peer.on("signal", (signal) => {
      socketRef.current.emit("returning signal", { callerId, signal });
    });

    peer.signal(incomingSignal);

    return peer;
  }

  // =================== render here ==========================
  return (
    <div className="meeting__page d-flex flex-column">
      <Navbar />
      <div className="container-fluid border pt-4 pb-3 mt-5 flex-fill d-flex overflow-hidden">
        <div className="meeting__box overflow-hidden border border-danger h-100 flex-wrap flex-fill d-flex justify-content-center align-items-center position-relative">
          <div className="vedio__box p-1 d-flex justify-content-center">
            <video className="video" ref={userVideo} autoPlay muted />
          </div>
          {peers.map((peer) => (
            <div
              key={peer.peerId}
              className="vedio__box p-1 d-flex justify-content-center"
            >
              <Video peer={peer.peer} />
            </div>
          ))}
          {/* control box */}
          <ControlBox />
        </div>
        {/* side bar */}
        <Sidebar />
      </div>
    </div>
  );
};

export default Meeting;
