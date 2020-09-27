import React from "react";
import "./App.css";

// component
import Signup from "./components/signin/Signin";
import Home from "./components/Home/Home";

// context
import { useDataLayerValue } from "./DataLayer";

function App() {
  const [{ userName, imageUrl }, dispatch] = useDataLayerValue();

  return (
    <div className="app">
      {userName && imageUrl ? (
        <Home userName={userName} imageUrl={imageUrl} />
      ) : (
        <Signup />
      )}
    </div>
  );
}

export default App;
