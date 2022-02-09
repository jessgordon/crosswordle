import React from 'react'

export default function Cell({field, checkCell}) {
 
  return (
    <input className={field.readonly === true ? "correct" : "field"} row={field.row} col={field.col} value={field.value || ""} readOnly={field.readonly} answer={field.answer} onChange={checkCell} maxLength="1">
    </input>

  )
}
