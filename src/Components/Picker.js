/* eslint-disable react-hooks/exhaustive-deps */
import "../Assets/styles/Picker.css";

import React, { useEffect, useState } from "react";
import { getHero } from "../firebaseBackend";
function Picker(props) {
  const [pikachu, setPickachu] = useState({});
  const [freeman, setFreeman] = useState({});
  const [sackboy, setSackboy] = useState({});
  const [successCount, setSuccessCount] = useState(0); // max success count is 3

  useEffect(() => {  // retrieve data from the firestore backend
    async function initData() {
      const freeman = await getHero("freeman");
      setFreeman(freeman);

      const pikachu = await getHero("pikachu");
      setPickachu(pikachu);

      const sackboy = await getHero("sackboy");
      setSackboy(sackboy);
    }
    initData();
  
  }, []);

  useEffect(() => {
    if (successCount === 3) {
      // listen to the successCount and show the you win screen when all the 3 heros are found
      console.log("YOU WON BEBE!");
      props.endGame();
    } else {
      console.log("not yet bebe");
    }
  }, [successCount]);

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
      // remove freeman menu option
      const freemanDiv = document.querySelector("li.freeman");
      freemanDiv.remove();
      props.responseFunctions.success();
      setSuccessCount(successCount + 1);
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
      // remove sackboy menu option
      const sackboyDiv = document.querySelector("li.sackboy");
      sackboyDiv.remove();
      props.responseFunctions.success();
      setSuccessCount(successCount + 1);
    } else {
      props.responseFunctions.fail();
    }
  }

  function checkPikachu() {
    const x = props.coordinates.x;
    const y = props.coordinates.y;
    if (
      x >= pikachu.lower_x &&
      x <= pikachu.upper_x &&
      y >= pikachu.lower_y &&
      y <= pikachu.upper_y
    ) {
      // remove pikachu menu option
      const pikachuDiv = document.querySelector("li.pikachu");
      pikachuDiv.remove();
      props.responseFunctions.success(); // show "Success popup"
      setSuccessCount(successCount + 1);
    } else {
      props.responseFunctions.fail();
    }
  }

  if (successCount === 3) {
    return <></>;
  } else {
    return (
      <div
        style={PickerStyle}
        className={`${props.className} picker-container`}
      >
        <ul>
          <li className="freeman">
            <button className="choice" onClick={checkFreeman}>
              Gordon Freeman
            </button>
          </li>
          <li className="pikachu">
            <button className="choice" onClick={checkPikachu}>
              Pickachu
            </button>
          </li>
          <li className="sackboy">
            <button className="choice" onClick={checkSackboy}>
              Sackboy
            </button>
          </li>
        </ul>
        <div className="arrow-down">
        </div>
      </div>
    );
  }
}

export default Picker;
