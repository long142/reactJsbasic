import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ColorBox.scss";

Color.propTypes = {};

function getRandomColor() {
  const color_list = ["black", "blue", "red", "orange"];
  const randomIndex = Math.trunc(Math.random() * 4);
  return color_list[randomIndex];
}

function Color() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box_color") || "red";
    return initColor;
  });

  function handleChangeColor() {
    const newColor = getRandomColor();
    setColor(newColor);

    localStorage.setItem("box_color", newColor);
  }
  return (
    <div
      className="color-box"
      style={{
        backgroundColor: color,
        width: "100px",
        height: "100px",
        textAlign: "center",
      }}
      onClick={handleChangeColor}
    >
      color box
    </div>
  );
}

export default Color;
