import "../Assets/styles/Leaderboard.css";
function Leaderboard(props) {
  console.log(props);
  return (
    <div className="leaderboard-container">
      <div className={`leaderboard`}>
        {props.leaderboardArray.map((element, index) => (
          <div key={index}>
            {index + 1} {element.name}{" "}
            {("0" + Math.floor((element.time / 60000) % 60)).slice(-2)}:
            {("0" + Math.floor((element.time / 1000) % 60)).slice(-2)}
          </div>
        ))}
        <button
          className="close-leaderboard"
          onClick={() => {
            props.setVisibility(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Leaderboard;
