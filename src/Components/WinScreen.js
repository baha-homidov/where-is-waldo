import "../Assets/styles/WinScreen.css";

function WinScreen(props) {
  return (
    <div className="win-screen-container">
      <h1 className="win-screen">
        <h1>You win!</h1>
        <div className="numbers">
          <h2>Your Score</h2>
          <span>
            {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
          </span>
          <span>{("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((props.time / 10) % 100)).slice(-2)}</span>
        </div>
        <button
          className="restart"
          onClick={() => {
            window.location.reload();
          }}
        >
          Restart
        </button>
      </h1>
    </div>
  );
}

export default WinScreen;
