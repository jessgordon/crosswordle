import React, { useState } from 'react'
import "./HowToPlay.css";

export default function HowToPlay() {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} id="how-to-play-btn" class="is-size-6-touch is-size-5-tablet is-size-4-desktop m-3 p-2">How to Play</button>
      <div className="container">
      {showModal && (
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title" id="how-to-play-card-title">HOW TO PLAY</p>
              <button onClick={() => setShowModal(false)} className="delete" aria-label="close"></button>
            </header>
            <section className="modal-card-body">
              <p>Guess the CROSSWORDLE in five tries.</p>
              <p>The lower the score the better</p>
              <hr className="solid"></hr>
              <p>Each row and column must be a valid five-letter word.</p>
              <p>Reading from left to right:</p>
              <p>****EXAMPLES NEED CHANGING AND STYLING WITH IMAGES ONCE OUR GAME PLAY IS CONFIRMED***</p>
              <p>And up to down:</p>
              <p>****EXAMPLES NEED CHANGING AND STYLING WITH IMAGES ONCE OUR GAME PLAY IS CONFIRMED***</p>
              <hr className="solid"></hr>
              <p>Hit the check solution button to see if you're right.</p>
              <p>After each check, the color of the tiles will change to show how close your guess was to the solution.</p>
              <p>****EXAMPLES NEED CHANGING AND STYLING WITH IMAGES ONCE OUR GAME PLAY IS CONFIRMED***</p>
                <div className="coordMatch">
                  <p>The letter is in either the horizontal or vertical word but in the wrong spot</p>
                </div>
                <div className="noMatch">
                  <p>The letter is not in either the horizontal or vertical word in any spot</p>
                </div>
                <div className="fixedChar">
                  <p>The letter is in the word and in the correct spot</p>
                </div>     
              <hr className="solid"></hr>
              <p>Remember:</p>
              <p>You can only check your solution a maximum of five times before you're locked out.</p>
              <p>Good luck!</p>


            </section>
            <footer className="modal-card-foot">A new CROSSWORDLE will be available each day!</footer>
          </div>
        </div>
      )}
    </div>
  </>
  )
}
