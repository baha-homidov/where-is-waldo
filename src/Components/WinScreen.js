import React, { useState } from "react";
import "../Assets/styles/WinScreen.css";
import { writeNewScore } from "../firebaseBackend";
function WinScreen(props) {
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className="win-screen-container">
      <div className="win-screen">
        <h1>You win!</h1>
        <div className="numbers">
          <div>Your Score</div>
          <span>
            {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
          </span>
          <span>{("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((props.time / 10) % 100)).slice(-2)}</span>
        </div>
        <label>
          Name:
          <input type="text" value={value} onChange={handleChange} />
        </label>
        <button
          className="restart"
          onClick={async () => {
            await writeNewScore(value, props.time);
            window.location.reload();
          }}
        >
          Restart
        </button>
      </div>
    </div>
  );
}

export default WinScreen;
