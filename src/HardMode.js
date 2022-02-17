import React, { useState, useEffect } from "react";
import { HARDMODE_WORDS } from "./data/hardModeData";
import HowToPlay from "./components/HowToPlay";
import YouWin from "./components/YouWin";
import Grid from "./components/Grid";
import Score from "./components/Score";
import LetterBucket from "./components/LetterBucket";
import { parseWords, getDayNumber } from "./helpers/Helpers";
import {
  generateRowColNeighbours,
  generateHardGrid,
} from "./helpers/hardModeMethods";

console.log(HARDMODE_WORDS[getDayNumber() - 1])

export default function HardMode() {
  const MAXSCORE = 21;
  const WORDLENGTH = 5;
  const rawDailyAnswer = HARDMODE_WORDS[getDayNumber() - 1];
  const parsedDailyAnswer = parseWords(rawDailyAnswer);

  const initialGrid = generateHardGrid(parsedDailyAnswer);
  const possibleLetters = parsedDailyAnswer;
  let eachCellsNeighbours = generateRowColNeighbours(initialGrid);

  const [grid, setGrid] = useState(initialGrid);
  const [showModal, setShowModal] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    checkWin();
  }, [correctCount]);

  const checkWin = () => {
    if (correctCount === MAXSCORE) {
      console.log("You win");
      setShowModal(true);
    }
  };

  const changeCell = (e) => {
    const input = e.target.value.toUpperCase();
    if (!/^[a-zA-Z]*$/.test(input)) {
      e.target.preventDefault();
    }
    const r = e.target.attributes.row.value;
    const c = e.target.attributes.col.value;
    const newGrid = { ...grid };
    newGrid.rows[r].cols[c].value = input;
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
        } else if (cell.answer === "*") {
        } else {
          cell.state = "wrong";
        }
        updateCorrectCellCount(cell);
        eachCellsNeighbours = generateRowColNeighbours(newGrid);
      }
    }
    setGrid(newGrid);
    setScore((prevScore) => prevScore + 1);
  };

  const updateCorrectCellCount = (cell) => {
    if (cell.readonly && cell.answer !== "*") {
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
        <div className="column"></div>

        <div className="column is-two-thirds">
          <Grid grid={grid} changeCell={changeCell} />
          <LetterBucket answer={possibleLetters} grid={grid} key={"letterbucket"} />
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
            <HowToPlay key={"howToPlay"} mode={"hard"} />
          </div>
        </div>
      </div>

      <div className="container">
        {showModal && <YouWin score={score} />}
      </div>
    </>
  );
}
