import React, { useState, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { useDataLayerValue } from "../../DataLayer";

const Signin = () => {
  const [state, dispatch] = useDataLayerValue();

  //   google auth
  const responseGoogle = ({ profileObj }) => {
    dispatch({
      type: "SET_USER_DATA",
      name: profileObj.name,
      imageUrl: profileObj.imageUrl,
    });
  };

  return (
    <div>
      <GoogleLogin
        clientId="449932347009-i3jmtlpf0sqsuh5h9k0egaviplmb1538.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Signin;
