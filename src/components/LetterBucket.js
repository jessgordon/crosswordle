import React, { useRef } from "react";
import Letter from "./Letter.js";
import "./LetterBucket.css";

export default function LetterBucket(answer) {
  function getRandomInt(n) {
    return Math.floor(Math.random() * n);
  }

  function randomiseAnswer(answer) {
    let arr = answer.answer.slice();
    // console.log(answer.answer);
    const n = arr.length;

    for (let i = 0; i < n - 1; ++i) {
      let j = getRandomInt(n);

      let current_element = arr[i];
      arr[i] = arr[j];
      arr[j] = current_element;
    }

    return arr;
  }

  const arr = useRef(randomiseAnswer(answer));

  return (
    <>
      <div className="letterBucket" key={"letter-bucket"}>
        <div/>
        {arr.current.map((letter, index) => (
          <div key={index}>
            <Letter key={`letter-${index}`} letter={letter} index={index} />
            {index === 16 && <div />}
          </div>
        ))}
      </div>

    </>
  );
}
