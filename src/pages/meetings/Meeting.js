import React, { useEffect } from "react";
import "./Meeting.css";

// context
import { useDataLayerValue } from "../../DataLayer";
import { getUser } from "../../getUser";

// components
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sideBar/Sidebar";

const Meeting = () => {
  const [{ userName, imageUrl }, dispatch] = useDataLayerValue();
  useEffect(() => {
    getUser(dispatch);
  }, [userName, imageUrl]);
  return (
    <div className="meeting__page d-flex flex-column">
      <Navbar />
      <div className="container-fluid border pt-5 pb-3 mt-5 meeting__box flex-fill d-flex">
        <div className="border border-danger h-100 flex-fill">Hey</div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Meeting;
