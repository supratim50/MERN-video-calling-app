import React, { useState, useEffect } from "react";
import io from "socket.io-client";
// context
import { useDataLayerValue } from "../../DataLayer";

// components
import Navbar from "../navbar/Navbar";

const Home = (props) => {
  const [{ userName, imageUrl }, dispatch] = useDataLayerValue();
  const [profileImage, setProfileImage] = useState();
  const [googleSignin, setGoogleSignin] = useState(false);

  useEffect(() => {
    // fetching from the local storage
    let profile = localStorage.getItem("userProfile");
    profile = JSON.parse(profile);
    // set into the state
    setProfileImage(profile.profile_img);
    setGoogleSignin(profile.googleSignin);
  }, [userName, imageUrl]);

  // connect to the server
  const ENDPOINT = "http://localhost:4000";

  // connect with our backend
  const socket = io.connect(ENDPOINT);

  socket.emit("newUserJoin", { userName, imageUrl });

  return (
    <div>
      <Navbar profileImg={profileImage} googleSignin={googleSignin} />
    </div>
  );
};

export default Home;
