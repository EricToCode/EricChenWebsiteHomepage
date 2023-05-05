import wordBank from "./wordle-bank.txt";
import valid_wordBank from "./valid-wordle-words.txt";

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = async () => {
  let wordSet;
  let todaysWord;
  let validwordSet;
  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split("\n");
      todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
      wordSet = new Set(wordArr);
    });
  await fetch(valid_wordBank)
    .then((response) => response.text())
    .then((result) => {
      const valid_wordArr = result.split("\n");
      validwordSet = new Set(valid_wordArr);
    });
  return { wordSet, todaysWord, validwordSet };
};
