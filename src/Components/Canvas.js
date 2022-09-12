import "../Assets/styles/Canvas.css";
import Picker from "./Picker";
import React, { useState } from "react";
import artImage from "../Assets/img/art.jpeg";
function Canvas() {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [visibility, setVisibilty] = useState("");
  // function switchPicker() {
  //   console.log("click");
  //   if (picker) {
  //     setPicker(null);
  //   } else {
  //     setPicker(<Picker coordinates = {coordinates}/>);
  //   }
  // }

  function onClickOnImage(event) {
    if (visibility === "") {
      setVisibilty("hide");
    } else {
      setVisibilty("");
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

      console.log(`Coordinates: X= ${xPercent}%, Y = ${yPercent}%`);

      const newCoordinates = {
        x: xPercent,
        y: yPercent,
      };

      setCoordinates(newCoordinates);
    }
  }

  return (
    <div className="canvas-container">
      <div className="play-area" onClick={onClickOnImage}>
        <Picker className={visibility} coordinates={coordinates} />
        <img src={artImage} alt="" />
        <div className="freeman"></div>
        <div className="pikachu"></div>
        <div className="little-big"></div>
      </div>
    </div>
  );
}

export default Canvas;
