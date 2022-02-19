import React, { useRef } from "react";
import Letter from "./Letter.js";
import "./LetterBucket.css";

export default function LetterBucket({ answer, grid }) {
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

  function dictionary(answer) {
    var counts = {};
    answer.forEach(function (x) {
      counts[x] = (counts[x] || 0) + 1;
    });
    Object.keys(counts).map((key, _) => {
      let count = counts[key];
      counts[key] = { count: count, green: 0, yellow: 0 };
      return counts
    });
    return counts;
  }

  function formatLetters(grid) {
    let lettersArr = [];
    grid.rows.forEach((row) => {
      row.cols.forEach((cell) => {
        lettersArr.push(cell);
      });
    });
    return lettersArr;
  }

  function backgroundColour(grid, letterDictionary) {
    for (let i = 0; i < 25; ++i) {
      let letter = grid[i].value;
      let state = grid[i].state;
      if (letter !== "" && letter in letterDictionary) {
        if (state === "correct") letterDictionary[letter].green += 1;
        if (state === "wrong-location") letterDictionary[letter].yellow += 1;
        if (state === "wrong") letterDictionary[letter].yellow -= 1;
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

  const letterDictionary = dictionary(answer);
  const uniqueLetters = lettersArr(answer);
  const arr = useRef(randomiseAnswer(uniqueLetters));
  const gridarr = formatLetters(grid);
  backgroundColour(gridarr, letterDictionary);

  function setKeyboardLength(keyLength) {
    document.documentElement.style.setProperty("--row-length", keyLength);
  }
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
