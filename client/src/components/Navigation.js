import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import "../styles.scss";

const Navigation = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-mode__toggled" : "dark-mode__toggle"}>
      <div
        onClick={toggleMode}
        className={darkMode ? "toggle toggled" : "toggle"}
      />
    </div>
  );
};

export default Navigation;
