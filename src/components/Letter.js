import React from "react";
import "./Letter.css";

export default function Letter({ letter, index }) {
  function setColour(letter) {
    if (letter.state === "") {
      return "default";
    } else if (letter.state === "wrong-location") {
      return "wrong-location";
    } else if (letter.state === "wrong") {
      return "wrong";
    } else if (letter.state === "correct") {
      return "correct";
    }
  }

  return (
    <div className={letter.readonly ? "correct" : setColour(letter)} id={`letter-${index}`}>
      { letter.answer }
    </div>
  );
}
