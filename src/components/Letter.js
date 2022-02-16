import React from "react";
import "./Letter.css";

export default function Letter({ letter, index }) {
  return (
    <div className="randomLetter" id={`letter-${index}`} key={index}>
      {letter}
    </div>
  );
}
