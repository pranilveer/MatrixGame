import React, { useState } from "react";
import "./GridBox.css";

const GridBox = () => {
  const [grid, setGrid] = useState(Array(9).fill("white"));

  const handleClick = (index) => {
    if(grid[index] === "green") return;
    const newGrid = [...grid];
    newGrid[index] = "green";
    setGrid(newGrid);  };

  return (
    <div className="container">
      <div className="grid-box">
        {grid.map(( color, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className="box"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default GridBox;