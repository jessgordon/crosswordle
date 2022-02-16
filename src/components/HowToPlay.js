import React, { useState } from "react";
import "./HowToPlay.css";

export default function HowToPlay() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        id="how-to-play-btn"
        className="is-size-6-touch is-size-5-tablet is-size-4-desktop m-3 p-2"
      >
        How to Play
      </button>
      <div className="container">
        {showModal && (
          <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title" id="how-to-play-card-title">
                  HOW TO PLAY
                </p>
                <button
                  onClick={() => setShowModal(false)}
                  className="delete"
                  aria-label="close"
                ></button>
              </header>
              <section className="modal-card-body">
                <p>Guess the CROSSWORDLE in ten tries</p>
                <p>The higher the score the better</p>
                <hr className="solid"></hr>
                <p className="has-text-weight-medium">EASY MODE</p>
                <hr className="solid"></hr>
                <p className="p-2">Each row must be a valid five-letter word containing the letter from the diagonal word.</p>
                <p className="p-2">Hit the check solution button to see if you're right.</p>
                <p className="p-2">
                  After each check, the color of the tiles will change to show
                  how close your guess was to the solution:
                </p>
                <div className="coordMatch pt-2 pb-2 pl-4 pr-4 mt-2 mb-2 ml-5 mr-5">
                  <p>
                    The letter is in the word but
                    in the wrong place
                  </p>
                </div>
                <div className="noMatch pt-2 pb-2 pl-4 pr-4 mt-2 mb-2 ml-5 mr-5">
                  <p>
                    The letter is not in the word
                  </p>
                </div>
                <div className="fixedChar pt-2 pb-2 pl-4 pr-4 mt-2 mb-2 ml-5 mr-5">
                  <p>The letter is in the word and in the correct place</p>
                </div>


                <hr className="solid"></hr>
                <p className="has-text-weight-medium">HARD MODE</p>
                <hr className="solid"></hr>
                <p className="p-2">Each row and column must be a valid five-letter word.</p>
                <p>***** INSERT PHOTO *****</p>
                <p className="p-2">Hit the check solution button to see if you're right.</p>
                <p className="p-2">
                  After each check, the color of the tiles will change to show
                  how close your guess was to the solution:
                </p>
                <div className="coordMatch pt-2 pb-2 pl-4 pr-4 mt-2 mb-2 ml-5 mr-5">
                  <p>
                    The letter is in either the horizontal or vertical word but
                    in the wrong place
                  </p>
                </div>
                <div className="noMatch pt-2 pb-2 pl-4 pr-4 mt-2 mb-2 ml-5 mr-5">
                  <p>
                    The letter is not in either the horizontal or vertical word
                  </p>
                </div>
                <div className="fixedChar pt-2 pb-2 pl-4 pr-4 mt-2 mb-2 ml-5 mr-5">
                  <p>The letter is in the word(s) and in the correct place</p>
                </div>
                <hr className="solid"></hr>
                <p className="is-italic">Remember:</p>
                <p className="is-italic">You can only check your solution a 
                maximum of ten times before you're locked out!
                </p>
                <p className="pt-5">Good luck!</p>
              </section>
              <footer className="modal-card-foot">
                A new CROSSWORDLE will be available each day.
              </footer>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
