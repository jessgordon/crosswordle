import React, { useRef, useEffect, useState } from "react";
import Letter from "./Letter.js";
import "./LetterBucket.css";

function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}

function randomiseAnswer(answer) {
  let arr = answer.slice();
  const n = arr.length;

  for (let i = 0; i < n - 1; ++i) {
    let j = getRandomInt(n);

    let current_element = arr[i];
    arr[i] = arr[j];
    arr[j] = current_element;
  }

  return arr;
}

function dictionaryGenerator(answer) {
  var counts = {};
  answer.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });
  Object.keys(counts).map((key, _) => {
    let count = counts[key];
    counts[key] = { count: count, green: 0, yellow: 0 };
    return counts;
  });
  return counts;
}

function formatLetters(postCheckGrid) {
  let lettersArr = [];
  postCheckGrid.rows.forEach((row) => {
    row.cols.forEach((cell) => {
      lettersArr.push(cell);
    });
  });
  return lettersArr;
}

function backgroundColour(arrayOfCells, letterDictionary) {
  console.log(arrayOfCells);
  for (let i = 0; i < 25; ++i) {
    let letter = arrayOfCells[i].value;
    if (letter !== "" && letter in letterDictionary) {
      let state = arrayOfCells[i].state;
      if (state === "correct") letterDictionary[letter].green++;
      if (state === "wrong-location") letterDictionary[letter].yellow++;
    }
  }
}

function lettersArr(answer) {
  let arr = [...new Set(answer)];
  arr = arr.filter((char) => char !== "*");
  return arr;
}

function keyRowLength(uniqueLetters) {
  let numberOfLetters = uniqueLetters.length;
  if (numberOfLetters % 2 !== 0) {
    numberOfLetters += 1;
  }
  return numberOfLetters / 2;
}

function setKeyboardLength(keyLength) {
  document.documentElement.style.setProperty("--row-length", keyLength);
}

export default function LetterBucket({ answer, postCheckGrid }) {
  console.log(postCheckGrid.rows[0].cols[1])
  console.log("State %o", postCheckGrid.rows[0].cols[1].state);
  console.log("Value %o", postCheckGrid.rows[0].cols[1].value);

  const [postCheckGridState, setPostCheckGridState] = useState(postCheckGrid);

  const letterDictionary = dictionaryGenerator(answer);
  const uniqueLetters = lettersArr(answer);
  const gridArr = formatLetters(postCheckGrid);
  const arr = useRef(randomiseAnswer(uniqueLetters));
  // backgroundColour(gridArr, letterDictionary);



  useEffect(() => {
      console.log("Change occurred")
      backgroundColour(gridArr, letterDictionary);
    },[postCheckGridState])
 
  const rowLength = keyRowLength(uniqueLetters);
  setKeyboardLength(rowLength);

  return (
    <>
      <div className="letterBucket" key={"letter-bucket"}>
        {arr.current.map((letter, index) => (
          <Letter
            key={`letter-${index}`}
            countColours={letterDictionary[letter]}
            letter={letter}
            index={index}
          />
        ))}
      </div>
    </>
  );
}
