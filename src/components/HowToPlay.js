import React, { useState } from "react";
import "./HowToPlay.css";
import easyModeImg from '../Images/easy-mode.png';
import normalModeImg from '../Images/normal-mode.png';
import hardModeImg from '../Images/hard-mode.png';

export default function HowToPlay( { mode }) {
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
                <p>Guess the CROSSWORDLE</p>
                <p>The lower the guesses the better!</p>
                { mode === "easy" &&
                  <>
                    <hr className="solid"></hr>
                    <p className="has-text-weight-medium"> 😄 EASY MODE 😄 </p>
                    <hr className="solid"></hr>
                    <p className="p-2">Each row must be a valid five-letter word containing the letter from the diagonal word.</p>
                    <img id="easy-mode-img" src={easyModeImg} alt="Easy Mode Grid Diagram" />
                    <p className="p-2">Hit the check solution button to see if you're right.</p>
                    <p className="p-2">
                      After each check, the color of the tiles will change to show
                      how close your guess was to the solution:
                    </p>
                    <div className="coordMatch pt-2 pb-2 pl-4 pr-4 mt-2 mb-2 ml-5 mr-5 has-text-black">
                      <p>
                        The letter is in the word but
                        in the wrong place
                      </p>
                    </div>
                    <div className="noMatch pt-2 pb-2 pl-4 pr-4 mt-2 mb-2 ml-5 mr-5 has-text-black">
                      <p>
                        The letter is not in the word
                      </p>
                    </div>
                    <div className="fixedChar pt-2 pb-2 pl-4 pr-4 mt-2 mb-2 ml-5 mr-5">
                      <p>The letter is in the word and in the correct place</p>
                    </div>
                  </>
                }

                { mode === "normal" &&
                  <>
                    <hr className="solid"></hr>
                    <p className="has-text-weight-medium"> 🤔 NORMAL MODE 🤔 </p>
                    <hr className="solid"></hr>
                    <p className="p-2">Each row and column must be a valid five-letter word.</p>
                    <p className="p-2">Some characters will be filled out for you to help you get started.</p>
                    <img id="normal-mode-img" src={normalModeImg} alt="Normal Mode Grid Diagram" />
                    <p className="p-2">Hit the check solution button to see if you're right.</p>
                    <p className="p-2">
                      After each check, the color of the tiles will change to show
                      how close your guess was to the solution:
                    </p>
                    <div className="coordMatch pt-2 pb-2 pl-4 pr-4 mt-2 mb-2 ml-5 mr-5 has-text-black">
                      <p>
                        The letter is in either the horizontal or vertical word but
                        in the wrong place
                      </p>
                    </div>
                    <div className="noMatch pt-2 pb-2 pl-4 pr-4 mt-2 mb-2 ml-5 mr-5 has-text-black">
                      <p>
                        The letter is not in either the horizontal or vertical word
                      </p>
                    </div>
                    <div className="fixedChar pt-2 pb-2 pl-4 pr-4 mt-2 mb-2 ml-5 mr-5">
                      <p>The letter is in the word(s) and in the correct place</p>
                    </div>
                  </>
                }

                { mode === "hard" &&
                  <>
                    <hr className="solid"></hr>
                    <p className="has-text-weight-medium"> 🤯 HARD MODE 🤯 </p>
                    <hr className="solid"></hr>
                    <p className="p-2">Each row and column must be a valid five-letter word.</p>
                    <img id="hard-mode-img" src={hardModeImg} alt="Hard Mode Grid Diagram" />
                    <p className="p-2">Hit the check solution button to see if you're right.</p>
                    <p className="p-2">
                      After each check, the color of the tiles will change to show
                      how close your guess was to the solution:
                    </p>
                    <div className="coordMatch pt-2 pb-2 pl-4 pr-4 mt-2 mb-2 ml-5 mr-5 has-text-black">
                      <p>
                        The letter is in either the horizontal or vertical word but
                        in the wrong place
                      </p>
                    </div>
                    <div className="noMatch pt-2 pb-2 pl-4 pr-4 mt-2 mb-2 ml-5 mr-5 has-text-black">
                      <p>
                        The letter is not in either the horizontal or vertical word
                      </p>
                    </div>
                    <div className="fixedChar pt-2 pb-2 pl-4 pr-4 mt-2 mb-2 ml-5 mr-5">
                      <p>The letter is in the word(s) and in the correct place</p>
                    </div>
                  </>
                }
                <hr className="solid"></hr>
                <p className="p-2">Hint:</p>
                <p className="p-2">The keys at the bottom may help you figure out how many times each character will appear within the grid (you'll start to see them change colour when you check your solution).</p>
                <p className="p-2">Good luck!</p>
              </section>
              <footer className="modal-card-foot">
                ⛅ A new CROSSWORDLE will be available each day
              </footer>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
