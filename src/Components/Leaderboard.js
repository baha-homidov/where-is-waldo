import "../Assets/styles/Leaderboard.css";
import cup from "../Assets/img/cup.png";
import stopwatch from "../Assets/img/stopwatch.svg"
function Leaderboard(props) {
  console.log(props);
  return (
    <div className="leaderboard-container">
      <div className="leaderboard">
        <h1 className="title">
          {" "}
          <img className="cup" src={cup} alt="" /> LEADERBOARD
        </h1>
        <div className="score-list">
          {props.leaderboardArray.map((element, index) => {
            let name;
            if (element.name === "") { name = "Anonymous" } else {
              name = element.name;
            }
            return (
            <div className={`entry index-${index+1}`} key={index}>
              <span className="number">{index + 1}</span>
              <span className="name">{name} </span>
              <span className="time">
                {("0" + Math.floor((element.time / 60000) % 60)).slice(-2)}:
                {("0" + Math.floor((element.time / 1000) % 60)).slice(-2)}
                <img src={stopwatch} alt="" />
              </span>
            </div>
          )})}
        </div>
        <button
          className="close-leaderboard"
          onClick={() => {
            props.setVisibility(false);
          }}
        >
          Hide
        </button>
      </div>
    </div>
  );
}

export default Leaderboard;
