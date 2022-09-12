import "../Assets/styles/Picker.css";

function Picker(props) {
  console.log(props);
  const PickerStyle = {
    position: "absolute",
    left: `${props.coordinates.x}%`,
    top: `${props.coordinates.y}%`,
  };

  function checkFreeman() {
    
  }

  return (
    <div style={PickerStyle} className={`picker-container`}>
      <ul className={props.className}>
        <li>
          <button className="choice">Choice 1</button>
        </li>
        <li>
          <button className="choice">Choice 2</button>
        </li>
        <li>
          <button className="choice">Choice 3</button>
        </li>
      </ul>
    </div>
  );
}

export default Picker;
