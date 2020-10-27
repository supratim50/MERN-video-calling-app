import React from "react";
import { useDataLayerValue } from "../../DataLayer";

// css
import "./ProfileImage.css";

const ProfileImage = () => {
  const [{ imageUrl, isGoogleSignin }, dispatch] = useDataLayerValue();
  console.log(imageUrl);
  return (
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
  );
};

export default ProfileImage;
