import "../Assets/styles/WinScreen.css";

function WinScreen() {
  return (
    <div className="win-screen-container">
      <h1 className="win-screen">
        <h1>You win!</h1>
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
