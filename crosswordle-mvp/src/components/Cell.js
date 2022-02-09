import React from 'react'

export default function Cell({field,handleChange}) {
  return (
    <input className='field' row={field.row} col={field.col} value={field.value || ""} readOnly={field.readonly} data-answer={field.answer} onChange={handleChange}>
    </input>

  )
}
