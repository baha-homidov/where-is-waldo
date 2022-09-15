import "../Assets/styles/Leaderboard.css";
import React, { useState } from "react";
function Leaderboard(props) {
  const [visibility, setVisibilty] = useState("hide");

  function changeVisibility() {
    if (visibility === "hide") {
      setVisibilty("");
    } else {
      setVisibilty("hide");
    }
  }
  console.log(props);
  return (
    <div className="leaderboard-container">
      <button className="leaderboard-toggle" onClick={changeVisibility}>
        Leaderboard
      </button>
      <div className={`leaderboard ${visibility}`}>
        {props.leaderboardArray.map((element, index) => (
          <div key={index}>
            {index + 1} {element.name}{" "}
            {("0" + Math.floor((element.time / 60000) % 60)).slice(-2)}:
            {("0" + Math.floor((element.time / 1000) % 60)).slice(-2)}
          </div>
        ))}
        <button className="close-leaderboard" onClick={changeVisibility}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Leaderboard;
