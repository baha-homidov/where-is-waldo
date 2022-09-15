import "../Assets/styles/App.css";
import Header from "./Header";
import Canvas from "./Canvas";
import WelcomeScreen from "./WelcomeScreen";
import React, { useState, useEffect } from "react";
import { getLeaderboard } from "../firebaseBackend";
import WinScreen from "./WinScreen";

function App() {
  // visibility controllers
  const [welcomeScreenVisibility, setWelcomeScreenVisibility] = useState(true);
  const [winScreenVisibility, setWinScreenVisibility] = useState(false);
  // time logic
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  // leaderboard retrieved from firestore backend
  const [leaderboardArray, setLeaderboardArray] = useState([]);

  useEffect(() => {
    async function initLeaderBoard() {
      const newLeaderboard = await getLeaderboard();
      setLeaderboardArray(newLeaderboard);
    }
    initLeaderBoard();
  }, []);

  // starts the timer on the 'running' state change
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

  // converts time to seconds on 'time' state change
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
      {/* <div className="numbers">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        <div>{seconds}</div>
      </div>
      <div className="buttons">
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button onClick={() => setTime(0)}>Reset</button>
      </div> */}

      {welcomeScreenVisibility && (
        <WelcomeScreen startGame={startGame} leaderboardArray={leaderboardArray} />
      )}
      {winScreenVisibility && <WinScreen time={time} />}
      <Header />
      <Canvas endGame={endGame} />
    </div>
  );
}

export default App;
