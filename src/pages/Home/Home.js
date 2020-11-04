import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";
// icons
import { FaVideo, FaPlusCircle } from "react-icons/fa";
// context
import { useDataLayerValue } from "../../DataLayer";
import { getUser } from "../../getUser";
// components
import Navbar from "../../components/navbar/Navbar";
import SquareButton from "../../components/buttons/SquareButton/SquareButton";
import CreateRoom from "../../components/modal/CreateRoom";

const Home = () => {
  const [{ userName, imageUrl }, dispatch] = useDataLayerValue();
  const history = useHistory();

  useEffect(() => {
    // add data into reducer
    getUser(dispatch, () => {
      // go back to login page if user not login
      history.push("/");
    });
  }, [userName, imageUrl]);

  return (
    <div>
      {/* background svg */}
      <div className="svg_box">
        <img className="image-fluid" src={require("../../images/circle.svg")} />
      </div>
      {/* home content */}
      <Navbar classList="mt-3" />
      <div className="container home__content">
        <div className="row">
          {/* col no 1 */}
          <div className="col-12 col-md-6 px-0 d-flex align-items-center ">
            <div>
              {/* welcome text */}
              <h1 className="welcome__text font-weight-bold">
                <span className="color_primary_one">Welcome To</span>
                <span className="color_primary"> Vi</span>
                <span className="color_secondary">Meet</span>
                <span className="color_primary_one"> {userName}</span>
              </h1>
              {/* button */}
              <div className="d-flex mt-5 pt-5">
                <SquareButton
                  icon={<FaVideo />}
                  classList="orange"
                  text="New Meeting"
                  clickable
                />
                <SquareButton
                  icon={<FaPlusCircle />}
                  classList="blue"
                  text="Join"
                />
              </div>
            </div>
          </div>
          {/* col no 2 */}
          <div className="col-12 col-md-6 px-0 d-flex align-items-center ">
            <div className="image__box width-100 ml-auto">
              <img
                className="home_image image-fluid"
                src={require("../../images/homeSvg.svg")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
