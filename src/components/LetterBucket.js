import React, { useRef } from "react";
import Letter from "./Letter.js";
import "./LetterBucket.css";

export default function LetterBucket(grid) {
  function formatLetters(grid) {
    let lettersArr = []
    grid.grid.rows.forEach((row) => {
      row.cols.forEach((cell) => {
        lettersArr.push(cell);
      });
    });
    return lettersArr;
  }
  
  function getRandomInt(n) {
    return Math.floor(Math.random() * n);
  }
  
  function randomiseAnswer(lettersArr) {
    let arr = lettersArr.slice();
    const n = arr.length;
    
    for (let i = 0; i < n - 1; ++i) {
      let j = getRandomInt(n);
      
      let current_element = arr[i];
      arr[i] = arr[j];
      arr[j] = current_element;
    }
    
    return arr;
  }

  
  let lettersArr = formatLetters(grid);
  const arr = useRef(randomiseAnswer(lettersArr));

  function getUnconfirmedNeighbours(currentLetter, lettersArr = lettersArr) {
    let value = currentLetter.value;
    let currentRow = currentLetter.row;
    let currentCol = currentLetter.col;
    let row = lettersArr.slice((5*currentRow), (5*currentRow + 5));
    let col = []
    for (let i = 0; i < 5; ++i) {
      col.push(lettersArr[currentCol]);
      currentCol += 5;
    }
    row = row.filter(letter => !(letter.readOnly));
    col = col.filter(letter => !(letter.readOnly));
    let unconfirmedNeighbours = row.concat(col);
    unconfirmedNeighbours = unconfirmedNeighbours.filter(letter => letter.answer === value);
    return unconfirmedNeighbours;
  }

  return (
    <>
      <div className="letterBucket" key={"letter-bucket"}>
        <div />
        {arr.current.map((letter, index) => (
          <>
            <Letter key={`letter-${index}`} letter={letter} index={index} getUnconfirmedNeighbours={getUnconfirmedNeighbours} />
            {index === 16 && <div />}
          </>
        ))}
      </div>
    </>
  );
}
