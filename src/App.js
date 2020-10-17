import React, {useEffect} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// component
import Signup from "./components/signin/Signin";
import Home from "./components/Home/Home";


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
      <Route exact path="/" component={Signup} />
    </Router>
  );
}

export default App;
