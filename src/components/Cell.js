import React from "react";

export default function Cell({ field, changeCell }) {
  function setColour(field) {
    if (field.state === "") {
      return "default";
    } else {
      return `${field.state}`;
    }
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
