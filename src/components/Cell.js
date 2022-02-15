import React from "react";
import "./Cell.css";

export default function Cell({ field, changeCell }) {
  function setColour(field) {
    return `${field.state}`;
  }

  return (
    <input
      className={setColour(field)}
      row={field.row}
      col={field.col}
      state={field.state}
      value={field.value || ""}
      readOnly={field.readonly}
      answer={field.answer}
      onChange={changeCell}
      maxLength="1"
    ></input>
  );
}
