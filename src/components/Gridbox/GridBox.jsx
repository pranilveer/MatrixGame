import React, { useState } from "react";
import "./GridBox.css";

const GridBox = () => {
  const [grid, setGrid] = useState(Array(9).fill("white"));
  const [clickedBoxes, setClickedBoxes] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (index) => {
    if (isAnimating || grid[index] === "green") return;

    const newGrid = [...grid];
    newGrid[index] = "green";
    setGrid(newGrid);
    setClickedBoxes([...clickedBoxes, index]);

    if (clickedBoxes.length === 8) {
      animateBoxes([...clickedBoxes, index]);
    }
  };

  const animateBoxes = (order) => {
    setIsAnimating(true);
    order.forEach((idx, i) => {
      setTimeout(() => {
        setGrid((prev) => {
          const newGrid = [...prev];
          newGrid[idx] = "orange";
          return newGrid;
        });
        if (i === order.length - 1) setIsAnimating(false);
      }, i * 1000);
    });
  };

  const resetGrid = () => {
    setGrid(Array(9).fill("white"));
    setClickedBoxes([]);
    setIsAnimating(false);
  };

  return (
    <div className="container">
      <div className="grid-box">
        {grid.map((color, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className="box"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
      <button onClick={resetGrid} class="pushable">
        <span class="shadow"></span>
        <span class="edge"></span>
        <span class="front"> Reset </span>
      </button>
    </div>
  );
};

export default GridBox;
