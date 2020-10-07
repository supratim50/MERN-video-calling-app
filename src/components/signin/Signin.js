import React, { useState, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { useDataLayerValue } from "../../DataLayer";
// svg
import LoginSvg from "../../images/loginSvg.svg";
// css
import "./Signin.css";

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
    <div className="container-fluid py-3" style={{ height: "100vh" }}>
      <div className="row mx-auto h-100">
        <div className="col-12 col-md-6 h-100 px-0">
          {/* login svg box */}
          <div className="w-100 h-100 p-5 login__svg  d-flex flex-column">
            <h2 className="logo font-weight-bold">V!Meet</h2>
            <h1 className="heading text-capitalize pt-4 mt-3 text-white font-weight-bold">
              One cLick to go digital
            </h1>
            <div className="w-100 mt-auto">
              <img className="w-100" src={LoginSvg} alt="Login Svg" />
            </div>
          </div>
        </div>
        {/* login box */}
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
          <div className="login__box w-100">
            {/* form box */}
            <div className="form__box mb-4">
              <h2 className="mb-4">Login as a Guest</h2>
              <input
                type="text"
                className="username__input p-3 w-100 mb-5"
                placeholder="Username"
              />
              <button className="join__btn w-100 py-3 font-weight-bold">
                Join
              </button>
            </div>
            <p className="text-muted text-center mb-4">or</p>
            <div>
              {/* google button */}
              <GoogleLogin
                clientId="449932347009-i3jmtlpf0sqsuh5h9k0egaviplmb1538.apps.googleusercontent.com"
                buttonText="Login With Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
                theme="dark"
                className="google__login"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
