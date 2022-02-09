import React from 'react'

export default function Cell({field}) {
  return (
    <input className='field' value={field.value} readOnly={field.readonly}>
    </input>

  )
}
