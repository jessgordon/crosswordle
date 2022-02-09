import React from "react";

export default function Cell({ field, checkCell }) {
  return (
    <input
      className={field.readonly === true ? "correct" : "field"}
      answer={field.answer}
      row={field.row}
      col={field.col}
      value={field.value || ""}
      readOnly={field.readonly}
      onChange={checkCell}
      maxLength="1"
    ></input>

    // Need a function to be called onsubmit of the entire form itself, which will loop through all cells and identify if the value matches the answer
  );
}
