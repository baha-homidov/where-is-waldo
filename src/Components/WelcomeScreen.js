import "../Assets/styles/WelcomeScreen.css";

function WelcomeScreen(props) {
  return (
    <div className="welcome-screen-container">
      <div className="welcome-screen">
        <h2>Welcome to</h2>
        <h1>Where's Waldo GLE</h1>
        <div className="instructions">
          You need to find and click on the following characters
        </div>
        <div className="heros-characters">
          <div className="charachter-entry">
            <div className="name">Gordon Freeman</div>
          </div>
          <div className="charachter-entry">
            <div className="name">Pikachu</div>
          </div>
          <div className="charachter-entry">
            <div className="name">Sackboy</div>
          </div>
          <button className="let-go" onClick={props.hide}>
            Let's go!
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeScreen;
