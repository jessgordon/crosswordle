import React from 'react'

export default function YouWin( { score }) {
  return (
    <>
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="box">
            <p>🥳 🥳 🥳 🥳 🥳</p>
            <p>🥳 🥳 🥳 🥳 🥳</p>
            <p className="has-text-weight-bold"> Your final score is:</p>
            <p className="has-text-weight-bold">🥳 🥳 {score} 🥳 🥳</p>
            <p>🥳 🥳 🥳 🥳 🥳</p>
          </div>
        </div>
      </div>
    </>
  )
}
