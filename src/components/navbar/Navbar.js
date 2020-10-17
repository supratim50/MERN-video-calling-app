import React, { useState } from "react";
import Logo from "../Heading/Logo/Logo";

import "./Navbar.css";

const Navbar = ({ profileImg, googleSignin }) => {
  //   const [profileImg, setProfileImg] = useState("");

  return (
    <div className="navbar py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <Logo />
        <div className="image_box rounded-circle overflow-hidden">
          {googleSignin ? (
            <img className="img-fluid profile_img" src={profileImg} />
          ) : (
            <img
              className="img-fluid profile_img"
              src={require(`../../images/profile_img.jpg`)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
