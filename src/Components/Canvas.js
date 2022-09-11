import "../Assets/styles/Canvas.css";
import Picker from "./Picker";
import React, { useState } from "react";
function Canvas() {
  const [picker, setPicker] = useState(<Picker />);

  return <div className="canvas-container">{picker}</div>;
}

export default Canvas;
