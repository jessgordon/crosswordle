import React from "react";

export default function Cell({ field, changeCell }) {
  return (
    <input
      className={field.readonly === true ? "correct" : "field"}
      row={field.row}
      col={field.col}
      value={field.value || ""}
      readOnly={field.readonly}
      answer={field.answer}
      onChange={changeCell}
      maxLength="1"
    ></input>
  );
}
