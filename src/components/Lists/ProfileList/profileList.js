import React from "react";
import "./profileList.css";

const ProfileList = ({ userDetails }) => {
  return (
    <div className="profile-box d-flex align-items-center bg_color_white shadow-sm rounded-lg p-2 mb-3 border">
      <div>
        <img
          src={userDetails.imageUrl}
          className="participants-profile-img rounded-circle"
        />
      </div>
      {/* details */}
      <div className="flex-fill d-flex align-items-center ml-3">
        {userDetails.name}
      </div>
    </div>
  );
};

export default ProfileList;
