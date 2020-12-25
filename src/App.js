import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// component
import Signup from "./pages/signin/Signin";
import Home from "./pages/Home/Home";
import Meeting from "./pages/meetings/Meeting";

// context
import { DataLayer } from "./contexts/DataLayer";
import SocketContext from "./contexts/SocketContext";
import reducer, { initialState } from "./reducer";
import MessageContext from "./contexts/messageContext";

function App() {
  return (
    <SocketContext>
      <DataLayer initialState={initialState} reducer={reducer}>
        <MessageContext>
          <Router>
            <Route path="/home" component={Home} />
            <Route path="/meeting" component={Meeting} />
            <Route exact path="/" component={Signup} />
          </Router>
        </MessageContext>
      </DataLayer>
    </SocketContext>
  );
}

export default App;
