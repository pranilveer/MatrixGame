import React, { useEffect, useState } from "react";
import dayIcon from "./assets/day.png";
import nightIcon from "./assets/night.png";
import "./App.css";
import GridBox from "./components/Gridbox/Gridbox";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <>
      <div className="main-container">
        <button onClick={toggleDarkMode} className="toggle-button">
          <img
            src={isDarkMode ? nightIcon : dayIcon}
            alt="Toggle Dark Mode"
            className="toggle-icon"
          />
        </button>

        <GridBox />
      </div>
    </>
  );
}

export default App;
