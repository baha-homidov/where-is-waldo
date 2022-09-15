import React, { useState } from "react";
import "../Assets/styles/WelcomeScreen.css";
import Leaderboard from "./Leaderboard";
import freeman from "../Assets/img/freeman.png";
import pikachu from "../Assets/img/pikachu.png";
import sackboy from "../Assets/img/sackboy.png";
function WelcomeScreen(props) {
  const [visibility, setVisibility] = useState(false);

  return (
    <div className="welcome-screen-container">
      {visibility && (
        <Leaderboard
          leaderboardArray={props.leaderboardArray}
          setVisibility={setVisibility}
        />
      )}
      <div className="welcome-screen">
        <h2 className="welcome">Welcome to</h2>
        <h1 className="title">Where's Waldo GLE</h1>
        <div className="heroes-container">
        <div className="instructions">Find these heroes</div>
          <div className="hero-entry">
            <img src={freeman} alt="" className="photo" />
            <div className="name">Gordon Freeman</div>
          </div>
          <div className="hero-entry">
            <img src={pikachu} alt="" className="photo" />
            <div className="name">Pikachu</div>
          </div>
          <div className="hero-entry">
            <img src={sackboy} alt="" className="photo" />
            <div className="name">Sackboy</div>
          </div>
        </div>
        <div className="button-container">
          <button className="leaderboard-button" onClick={() => {
            setVisibility(true);
          }}>
            Leaderboard
          </button>
          <button className="let-go" onClick={props.startGame}>
            Let's go!
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeScreen;
