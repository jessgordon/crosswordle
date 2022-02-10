import React from 'react'

export default function Letter({ letter, index }) {

  // console.log("*************")
  // console.log("*************")
  // console.log(index)
  // console.log("*************")
  // console.log("*************")

  return (
    <div className='randomLetter' id={`letter-${index}`}>{letter}</div>
  )
}
