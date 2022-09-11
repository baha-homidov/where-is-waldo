import "../Assets/styles/Menu.css";
import React, { useState } from "react";
function Menu() {
  const [visibility, setVisibilty] = useState("hide");

  function changeVisibilty() {
    if (visibility === "hide") {
      setVisibilty("");
    } else {
      setVisibilty("hide");
    }
  }
  return (
    <div className="menu-container">
      <button className="menu-toggle" onClick={changeVisibilty}>
        =<div>Menu</div>
      </button>
      <ul className={`menu-list ${visibility}`}>
        <li>
          <button>Level 1</button>
        </li>
        <li>
          <button>Level 2</button>
        </li>
        <li>
          <button>Level 3</button>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
