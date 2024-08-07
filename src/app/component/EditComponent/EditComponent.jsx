/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import styles from "./EditComponent.module.css";

const ImprovedEditComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#201E59");
  const [textColor, setTextColor] = useState("#ffffff");
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = textColor;
  }, [backgroundColor, textColor]);

  const togglePopup = () => setIsOpen(!isOpen);

  const handleBackgroundChange = (e) => {
    setBackgroundColor(e.target.value);
  };

  const handleTextChange = (e) => {
    setTextColor(e.target.value);
  };

  const setLightMode = () => {
    setIsDarkMode(false);
    setBackgroundColor("#ffffff");
    setTextColor("#000000");
  };

  const setDarkMode = () => {
    setIsDarkMode(true);
    setBackgroundColor("#021226");
    setTextColor("#ffffff");
  };

  return (
    <div className={styles.container}>
      <button onClick={togglePopup} className={styles.editButton}>
        <span>Edit-Background</span>
      </button>
      {isOpen && (
        <div className={styles.popup}>
          <div className={styles.colorPickers}>
            <div className={styles.colorPicker}>
              <label htmlFor="bgColor">Background:</label>
              <input
                id="bgColor"
                type="color"
                value={backgroundColor}
                onChange={handleBackgroundChange}
              />
            </div>
            <div className={styles.colorPicker}>
              <label htmlFor="textColor">Text:</label>
              <input
                id="textColor"
                type="color"
                value={textColor}
                onChange={handleTextChange}
              />
            </div>
          </div>
          <div className={styles.modeButtons}>
            <button
              onClick={setDarkMode}
              className={`${styles.modeButton} ${
                isDarkMode ? styles.active : ""
              }`}
            >
              <span>Dark Mode</span>
            </button>
            <button
              onClick={setLightMode}
              className={`${styles.modeButton} ${
                !isDarkMode ? styles.active : ""
              }`}
            >
              <span>Light Mode</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImprovedEditComponent;
