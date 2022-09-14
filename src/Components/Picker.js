/* eslint-disable react-hooks/exhaustive-deps */
import "../Assets/styles/Picker.css";
import React, { useEffect, useState } from "react";
import { getHero } from "../firebaseBackend";
function Picker(props) {
  const [pikachu, setPickachu] = useState({});
  const [freeman, setFreeman] = useState({});
  const [sackboy, setSackboy] = useState({});

  useEffect(() => {
    async function initData() {
      const freeman = await getHero("freeman");
      setFreeman(freeman);

      const pikachu = await getHero("pikachu");
      setPickachu(pikachu);

      const sackboy = await getHero("sackboy");
      setSackboy(sackboy);
      console.log("finish");
    }
    initData();
  }, []);

  const PickerStyle = {
    position: "absolute",
    left: `${props.coordinates.x}%`,
    top: `${props.coordinates.y}%`,
  };

  function checkFreeman() {
    const x = props.coordinates.x;
    const y = props.coordinates.y;
    if (
      x >= freeman.lower_x &&
      x <= freeman.upper_x &&
      y >= freeman.lower_y &&
      y <= freeman.upper_y
    ) {
      props.responseFunctions.success();
    } else {
      props.responseFunctions.fail();
    }
  }

  function checkSackboy() {
    // Sackboy is the main her of the game "Little Big Planet"
    const x = props.coordinates.x;
    const y = props.coordinates.y;
    if (
      x >= sackboy.lower_x &&
      x <= sackboy.upper_x &&
      y >= sackboy.lower_y &&
      y <= sackboy.upper_y
    ) {
      props.responseFunctions.success();
    } else {
      props.responseFunctions.fail();
    }
  }

  function checkPikachu() {
    const x = props.coordinates.x;
    const y = props.coordinates.y;
    if (x >= pikachu.lower_x &&
      x <= pikachu.upper_x &&
      y >= pikachu.lower_y &&
      y <= pikachu.upper_y) {
      props.responseFunctions.success();
    } else {
      props.responseFunctions.fail();
    }
  }

  return (
    <div style={PickerStyle} className={`picker-container`}>
      <ul className={props.className}>
        <li>
          <button className="choice" onClick={checkFreeman}>
            Gordon Freeman
          </button>
        </li>
        <li>
          <button className="choice" onClick={checkPikachu}>
            Pickachu
          </button>
        </li>
        <li>
          <button className="choice" onClick={checkSackboy}>
            Sackboy
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Picker;
