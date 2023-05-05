import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({ keyVal, bigKey, disabled, almost, correct }) {
  const { gameOver, onSelectLetter, onDelete, onEnter } =
    useContext(AppContext);
  
  const getId = () => {
    if (bigKey) return "big";
    if (disabled) return "disabled";
    if (almost) return "almost";
    if (correct) return "correct";
    return null;
  };

  const selectLetter = () => {
    if (gameOver.gameOver) return;
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };
  return (
    <div
      className="key"
      id={getId()}
      onClick={selectLetter}
    >
      {keyVal}
    </div>
  );
}

export default Key;
