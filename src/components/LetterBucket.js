import React, { useRef } from "react";
import Letter from "./Letter.js";
import "./LetterBucket.css";

export default function LetterBucket(answer) {
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
    answer.answer.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
    return counts
  }

  function lettersArr(answer) {
    let arr = [...new Set(answer.answer)];
    return arr
  }

  const letterCount = dictionary(answer);
  const uniqueLetters = lettersArr(answer); 
  const arr = useRef(randomiseAnswer(uniqueLetters));

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
