import { React, useState, useEffect, useLayoutEffect } from "react";
import { EASYMODE_WORDS } from "./data/easyModeData";
import { generateEasyGrid } from "./helpers/easyModeGrid";
import {
  parseWords,
  getDayNumber,
  generateRowNeighbours,
  sanitizeInput,
} from "./helpers/Helpers";
import HowToPlay from "./components/HowToPlay";
import YouWin from "./components/YouWin";
import Grid from "./components/Grid";
import Score from "./components/Score";
import LetterBucket from "./components/LetterBucket";

// console.log(EASYMODE_WORDS[getDayNumber() - 1]);
export default function EasyMode() {
  const MAXSCORE = 25;
  const WORDLENGTH = 5;
  const rawDailyAnswer = EASYMODE_WORDS[getDayNumber() - 1];
  const parsedDailyAnswer = parseWords(rawDailyAnswer);

  const initialGrid = generateEasyGrid(parsedDailyAnswer);
  const possibleLetters = parsedDailyAnswer;
  let eachCellsNeighbours = generateRowNeighbours(initialGrid);

  const [grid, setGrid] = useState(initialGrid);
  const [bucketState, setBucketState] = useState(initialGrid);
  const [showHowToPlay, setShowHowToPlay] = useState(true);
  const [showWinModal, setShowWinModal] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [score, setScore] = useState(0);

  useLayoutEffect(() => {
    if (localStorage.getItem("hasVisitedEasy")) {
      setShowHowToPlay(false);
    } else {
      localStorage.setItem("hasVisitedEasy", "true");
    }
  }, []);

  useEffect(() => {
    const checkWin = () => {
      if (correctCount === MAXSCORE) {
        setShowWinModal(true);
      }
    };
    checkWin();
  }, [correctCount]);

  const changeCell = (e) => {
    let [input, r, c] = [...sanitizeInput(e)];
    const newGrid = { ...grid };
    if (input !== null) {
      newGrid.rows[r].cols[c].value = input;
    }
    setGrid(newGrid);
  };

  const checkGrid = () => {
    const newGrid = { ...grid };
    for (let i = 0; i < WORDLENGTH; i++) {
      for (let j = 0; j < WORDLENGTH; j++) {
        const cell = newGrid.rows[i].cols[j];
        if (cell.value === cell.answer) {
          cell.state = "correct";
          cell.readonly = true;
        } else if (
          eachCellsNeighbours.rows[i].cols[j].neighbours.includes(cell.value)
        ) {
          cell.state = "wrong-location";
        } else {
          cell.state = "wrong";
        }
        updateCorrectCellCount(cell);
        eachCellsNeighbours = generateRowNeighbours(newGrid);
      }
    }
    setGrid(newGrid);
    setBucketState(newGrid);
    setScore((prevScore) => prevScore + 1);
  };

  const updateCorrectCellCount = (cell) => {
    if (cell.readonly) {
      setCorrectCount((prevCount) => prevCount + 1);
    }
  };

  const checkCellsWrapper = () => {
    setCorrectCount(0);
    checkGrid();
  };

  return (
    <>
      <div className="columns is-vcentered">
        <div className="column is-mobile"></div>

        <div className="column is-two-thirds">
          <Grid grid={grid} changeCell={changeCell} />
          <div className="column mobile">
            <LetterBucket
              answer={possibleLetters}
              postCheckGrid={bucketState}
              key={"letterbucket"}
            />
          </div>
        </div>

        <div className="column">
          <div className="container scoreboard m-2">
            <p
              id="score-label"
              className="is-size-6-touch is-size-5-tablet is-size-4-desktop m-1"
            >
              Guesses:
            </p>
            <Score score={score} key={"refreshedScore"} />
            <p
              id="correct-cells-label"
              className="is-size-6-touch is-size-5-tablet is-size-4-desktop m-1"
            >
              Correct Letters:
            </p>
            <div className="correctCells is-size-4-touch is-size-2-tablet is-size-1-desktop m-3">
              {correctCount}
            </div>
            <button
              id="check-solution"
              className="is-size-6-touch is-size-5-tablet is-size-4-desktop m-3 p-2"
              onClick={checkCellsWrapper}
            >
              Check
              <br />
              Answer
            </button>

            <button
              onClick={() => setShowHowToPlay(true)}
              id="how-to-play-btn"
              className="is-size-6-touch is-size-5-tablet is-size-4-desktop m-3 p-2"
            >
              How to Play
            </button>
            <HowToPlay
              key={"howToPlay"}
              mode={"easy"}
              showModal={showHowToPlay}
              closeModal={() => setShowHowToPlay(false)}
            />
          </div>
        </div>
      </div>

      <div className="container">
        {
          <YouWin
            showModal={showWinModal}
            closeModal={() => setShowWinModal(false)}
            score={score}
            mode={"normal"}
          />
        }
      </div>
    </>
  );
}
