import React from "react";
import "./Letter.css";

export default function Letter({ letter, index }) {
  
    const myStyle={
        background:'linear-gradient(90deg, #9cf75c 50%, #ffffff 0%)',
    };
  return (
    <div className="randomLetter" style={myStyle} id={`letter-${index}`}>
      {letter}
    </div>
  );
  
}
