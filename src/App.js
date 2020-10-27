import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// component
import Signup from "./pages/signin/Signin";
import Home from "./pages/Home/Home";
import Meeting from "./pages/meetings/Meeting";

function App() {
  return (
    // <div className="app">
    //   {userName && imageUrl ? (
    //     <Home userName={userName} imageUrl={imageUrl} />
    //   ) : (
    //     <Signup />
    //   )}
    // </div>
    <Router>
      <Route path="/home" component={Home} />
      <Route path="/meeting" component={Meeting} />
      <Route exact path="/" component={Signup} />
    </Router>
  );
}

export default App;
