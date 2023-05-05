import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

function Letter({ letterPos, attemptVal }) {
  const { 
    board,
    setDisabledLetters,
    currAttempt, 
    correctWord, 
    setAlmostLetters,
    almostLetters,
    setCorrectLetters,
    correctLetters, 
  } = useContext(AppContext);
  const letter = board[attemptVal][letterPos];
  const correct = correctWord.toUpperCase()[letterPos] === letter;
  var freecount = 0;
  var precount = [0,0,0,0,0];
  if (correctWord.toUpperCase().includes(letter)) {
    var ind = letterPos
    while (ind<5) {
      if (correctWord.toUpperCase()[ind] === letter && correctWord.toUpperCase()[ind] !== board[attemptVal][ind] && ind !== letterPos) {
        freecount++;
        // precount[letterPos] = 1;
      }
      ind++;
    }
  }
  // loop thru to find all almost letters already found
  for (var i = 0; i < letterPos; i++) {
    // Code to be executed inside the loop
    const l = board[attemptVal][i];
    if (correctWord.toUpperCase()[i] !== l && l !== "" && correctWord.toUpperCase().includes(l)) {
      freecount--;
    }
  }
  const almost =  freecount > 0 && !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");

  useEffect(() => {
    if (letter !== "" && !correct && !almost && !correctLetters.includes(letter) && !almostLetters.includes(letter)) {
      console.log(letter);
      setDisabledLetters((prev) => [...prev, letter]);
    }
    else if (letter !== "" && almost && !correct && !correctLetters.includes(letter)) {
      console.log(letter);
      // logic to fixing yellow letter when another instance is green
      // the current attempt 5 letters
      // const currentAttemptLetters = board[currAttempt.attempt];
      // var freecount = 0;
      setAlmostLetters((prev) => [...prev, letter]);
    }
    else if (letter !== "" && correct) {
      console.log(letter);
      setCorrectLetters((prev) => [...prev, letter]);
      if (almostLetters.includes(letter)) {
        setAlmostLetters((prev) => prev.filter((item) => item !== letter));
      }
    }
  }, [currAttempt.attempt]);
  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
}

export default Letter;
