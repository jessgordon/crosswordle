import React, { useRef } from "react";
import Letter from "./Letter.js";
import "./LetterBucket.css";

export default function LetterBucket( { answer, grid } ) {
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
    answer.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
    Object.keys(counts).map(function(key, index) {
    let count = counts[key];
    counts[key] = { count: count, green: 0, yellow: 0 };
  });
    console.log(counts)
    return counts
  }

  function formatLetters(grid) {
    let lettersArr = []
    grid.rows.forEach((row) => {
      row.cols.forEach((cell) => {
        lettersArr.push(cell);
      });
    });
    return lettersArr;
  }

  function backgroundColour(grid) {
    // for (let i = 0; i < 25; ++i) {
    //   if ( grid[i].value === gird[i].answer )

    // }
  }

  function lettersArr(answer) {
    let arr = [...new Set(answer)];
    return arr
  }

  const letterCount = dictionary(answer);
  const uniqueLetters = lettersArr(answer); 
  const arr = useRef(randomiseAnswer(uniqueLetters));
  const gridarr = formatLetters(grid)
  backgroundColour(gridarr)
  return (
    <>
      <div className="letterBucket" key={"letter-bucket"}>
        <div />
        {arr.current.map((letter, index) => (
          <>
            <Letter key={`letter-${index}`} letter={letter} index={index} />
            {index === 16 && <div />}
          </>
        ))}
      </div>
    </>
  );
}
