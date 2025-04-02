import React, { useState } from "react";
import "./GridBox.css";

const GridBox = () => {
  const [grid, setGrid] = useState(Array(9).fill("white"));

  return (
    <div className="container">
      <div className="grid-box">
        {grid.map((index) => (
          <div
            key={index}
            className="box"
            style={{ backgroundColor: "white" }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default GridBox;