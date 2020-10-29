import React, { useState, useEffect } from "react";
import "./Meeting.css";

// context
import { useDataLayerValue } from "../../DataLayer";
import { getUser } from "../../getUser";

// components
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sideBar/Sidebar";

const Meeting = () => {
  const [show, setShow] = useState(false);

  const showSidebar = () => {
    setShow(!show);
  };

  const [{ userName, imageUrl }, dispatch] = useDataLayerValue();
  useEffect(() => {
    getUser(dispatch);
  }, [userName, imageUrl]);

  return (
    <div className="meeting__page d-flex flex-column">
      <Navbar />
      <div className="container-fluid border pt-4 pb-3 mt-5 flex-fill d-flex overflow-hidden">
        <div className="meeting__box border border-danger h-100 flex-wrap flex-fill d-flex justify-content-center align-items-center">
          <div className="vedio__box p-1">
            <div className="border border-danger w-100 h-100">hey</div>
          </div>
          <div className="vedio__box p-1">
            <div className="border border-danger w-100 h-100">hey</div>
          </div>
          <div className="vedio__box border p-1">
            <div className="border border-danger w-100 h-100">hey</div>
          </div>
          <div className="vedio__box border p-1">
            <div className="border border-danger w-100 h-100">hey</div>
          </div>
        </div>
        {show ? <Sidebar show /> : <Sidebar />}
      </div>

      <button onClick={showSidebar}>Click Here</button>
    </div>
  );
};

export default Meeting;
