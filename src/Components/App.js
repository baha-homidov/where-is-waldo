import "../Assets/styles/App.css";
import Header from "./Header";
import Canvas from "./Canvas";
import WelcomeScreen from "./WelcomeScreen";
import React, { useState, useEffect } from "react";

import WinScreen from "./WinScreen";
function App() {
  const [welcomeScreenVisibility, setWelcomeScreenVisibility] = useState(true);
  const [winScreenVisibility, setWinScreenVisibility] = useState(false);
 

  // time logic
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  useEffect(() => {
    setSeconds(Math.floor((time / 1000) % 60));
  }, [time]);

  function startGame() {
    setWelcomeScreenVisibility(false);
    setRunning(true);
  }


  function endGame() {
    setRunning(false);
    setWinScreenVisibility(true);
  }

  return (
    <div className="App">
      <div className="numbers">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        <div>{seconds}</div>
      </div>
      <div className="buttons">
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button onClick={() => setTime(0)}>Reset</button>
      </div>

      {welcomeScreenVisibility && <WelcomeScreen startGame={startGame} />}
      {winScreenVisibility && <WinScreen time={time} />}
      <Header />
      <Canvas endGame={endGame} />
    </div>
  );
}

export default App;
