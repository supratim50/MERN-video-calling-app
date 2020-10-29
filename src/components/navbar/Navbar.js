import React, { useState } from "react";
import Logo from "../Heading/Logo/Logo";
import ProfileImage from "../profileImg/ProfileImage";

import "./Navbar.css";

const Navbar = ({ classList }) => {
  //   const [profileImg, setProfileImg] = useState("");

  return (
    <div className={`navbar py-2 px-2 fixed-top ${classList ? classList : ""}`}>
      <div className="container px-0 d-flex justify-content-between align-items-center">
        <Logo />
        <ProfileImage />
      </div>
    </div>
  );
};

export default Navbar;
