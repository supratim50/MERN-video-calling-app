import React from "react";
import { useHistory } from "react-router-dom";
import { useDataLayerValue } from "../../DataLayer";

// css
import "./ProfileImage.css";

const ProfileImage = () => {
  const history = useHistory();

  // logout
  const logoutFunc = () => {
    localStorage.removeItem("userProfile");
    history.push("/");
  };

  const [{ imageUrl, isGoogleSignin }, dispatch] = useDataLayerValue();
  return (
    <div className="profile__box position-relative">
      <div className="image_box rounded-circle overflow-hidden">
        {isGoogleSignin ? (
          <img className="img-fluid profile_img" src={imageUrl} />
        ) : (
          <img
            className="img-fluid profile_img"
            src={require(`../../images/profile_img.jpg`)}
          />
        )}
      </div>
      <div className="drop__down shadow-sm position-absolute rounded-lg">
        <div
          className="drop__down-list paragraph__text-lg font-weight-bold text-capitalize"
          onClick={logoutFunc}
        >
          logout
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
