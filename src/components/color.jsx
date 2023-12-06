import React, { useState } from "react";
import "./ColorBox.scss";

function getRandomColor() {
  const aray = ["deeppink", "green", "yellow", "black", "blue"];
  const index = Math.trunc(Math.random() * 5);
  return aray[index];
}

export default function Color() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box_color") || "deeppink";
    return initColor;
  });
  const handleChangeColor = () => {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("box_color", newColor);
  };
  return (
    <>
      <div>Đổi màu ô b1</div>
      <div
        className="color-box"
        style={{ backgroundColor: color }}
        onClick={handleChangeColor}
      >
        change color
      </div>
    </>
  );
}
