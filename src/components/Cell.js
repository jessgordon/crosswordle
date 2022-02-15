import React from "react";
import "./Cell.css";

export default function Cell({ field, changeCell }) {
  function setColour(field) {
    if (field.state === "") {
      return "default";
    } else if (field.state === "wrong-location") {
      return "wrong-location";
    } else if (field.state === "wrong") {
      return "wrong";
    } else if (field.state === "correct") {
      return "correct";
    }
  }



  return (
      <input
        className={field.readonly ? "correct" : setColour(field)}
        row={field.row}
        col={field.col}
        state={field.state}
        value={field.value || ""}
        readOnly={field.readonly}
        answer={field.answer}
        onChange={changeCell}
        maxLength="1"
      />
  );
}
