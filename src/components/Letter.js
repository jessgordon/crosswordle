import React from "react";
import "./Letter.css";

export default function Letter({ countColours, letter, index }) {
  
    function colourPercentage(countColours) {
      const green = (countColours.green / countColours.count) * 100;
      const yellow = (countColours.yellow / countColours.count) * 100;
      return `linear-gradient(90deg, rgb(99, 199, 99) 0%, rgb(99, 199, 99) ${green}%, rgb(247, 247, 107) ${green}%, rgb(247, 247, 107) ${green + yellow}%, #D4D4D4 ${green + yellow}%, #D4D4D4 100%)`
    } 

    const myStyle={
        background:colourPercentage(countColours),
    };

  return (
    <div className="randomLetter" style={myStyle} id={`letter-${index}`}>
      {letter}
    </div>
  );
  
}
