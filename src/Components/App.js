import "../Assets/styles/App.css";
import Header from "./Header";
import Canvas from "./Canvas";
import WelcomeScreen from "./WelcomeScreen";
import React, { useState } from "react";
function App() {
  const [welcomeScreenVisibility, setWelcomeScreenVisibility] = useState(true);

  function hideWelcomeScreen() {
    console.log("click");
    setWelcomeScreenVisibility(false);
  }
  return (
    <div className="App">
      {welcomeScreenVisibility && <WelcomeScreen hide={hideWelcomeScreen} />}
      <Header />
      <Canvas />
    </div>
  );
}

export default App;
