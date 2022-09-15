import "../Assets/styles/Canvas.css";
import Picker from "./Picker";
import Success from "./Success";
import Fail from "./Fail";
import React, { useState } from "react";
import artImage from "../Assets/img/art.jpeg";
function Canvas(props) {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [pickerVisibility, setPickerVisibility] = useState("hide");
  const [successVisility, setSuccessVisibility] = useState("hide");
  const [failVisibilty, setFailVisibility] = useState("hide");

  function success() {
    setSuccessVisibility("");
    setFailVisibility("hide");
    setTimeout(function () {
      setSuccessVisibility("hide");
    }, 3000);
    console.log("success");
  }

  function fail() {
    setFailVisibility("");
    setSuccessVisibility("hide");
    setTimeout(function () {
      setFailVisibility("hide");
    }, 3000);
  }

  function onClickOnImage(event) {
    if (pickerVisibility === "") {
      setPickerVisibility("hide");
    } else {
      setPickerVisibility("");
      // event.nativeEvent.offsetX/offsetY offset relative to clien's image size
      const playArea = document.querySelector(".play-area");

      // width and height of the play-area on client side
      const clientHeight = playArea.clientHeight;
      const clientWidth = playArea.clientWidth;

      // offset by x&y on cliend side
      const X = event.nativeEvent.offsetX;
      const Y = event.nativeEvent.offsetY;

      // calculate x&y in percents on client side
      const xPercent = X / (clientWidth / 100);
      const yPercent = Y / (clientHeight / 100);

      const newCoordinates = {
        x: xPercent,
        y: yPercent,
      };
      console.log(newCoordinates);
      setCoordinates(newCoordinates);
    }
  }

  return (
    <div className="canvas-container">
      <div className="play-area" onClick={onClickOnImage}>
        <Picker
          className={pickerVisibility}
          coordinates={coordinates}
          endGame={props.endGame}
          responseFunctions={{
            success,
            fail,
          }}
        />
        <Success className={successVisility} />
        <Fail className={failVisibilty} />
        <img src={artImage} alt="" />
        <div className="freeman-border"></div>
        <div className="pikachu-border"></div>
        <div className="little-big-border"></div>
      </div>
    </div>
  );
}

export default Canvas;
