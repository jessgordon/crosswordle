import React from "react";
import "./Letter.css";

export default function Letter({ letter, index }) {
  function setColour(letter) {
    if (letter.state === "") {
      return "letter-default";
    } else if (letter.state === "wrong-location") {
      return "letter-wrong-location";
    } else if (letter.state === "wrong") {
      return "letter-wrong";
    } else if (letter.state === "correct") {
      return "letter-correct";
    }
  }

  return (
    <div className={letter.readonly ? "letter-correct" : setColour(letter)} id={`letter-${index}`}>
      { letter.answer }
    </div>
  );
}
