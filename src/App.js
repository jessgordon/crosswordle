import React, { useState, useEffect } from "react";
import { WORDS } from "./data/data";
import "./App.css";
import EasyMode from "./EasyMode";
import HowToPlay from "./components/HowToPlay";
import Grid from "./components/Grid";
import Score from "./components/Score";
import LetterBucket from "./components/LetterBucket";

const easy = EasyMode(WORDS);

function generateNeighbours(gridObject) {
  const result = { rows: [] };
  for (let i = 0; i < 5; i++) {
    let row = { cols: [], index: i };
    let rowCopy = { ...gridObject }.rows[i].cols;

    for (let j = 0; j < 5; j++) {
      let charsExcludingSelf = [];
      for (let cell of rowCopy) {
        if (cell.col !== j) {
          charsExcludingSelf.push(cell.answer);
        }
        if (cell.answer === cell.value) {
          charsExcludingSelf.splice(charsExcludingSelf.indexOf(cell.answer), 1);
        }
      }

      let attributes = {
        row: i,
        col: j,
        neighbours: charsExcludingSelf,
      };

      row.cols.push(attributes);
    }
    result.rows.push(row);
  }

  return result;
}

function generateCrosswordle(rawLetters) {
  const raw = rawLetters;
  const result = { rows: [] };

  for (let i = 0; i < 5; i++) {
    let row = { cols: [], index: i };
    for (let j = 0; j < 5; j++) {
      let answer = raw[i * 5 + j];
      let value = null;
      let state_tmp = "default";
      // Above state types should probably be declared as a constant elsewhere

      if (i === j) {
        value = answer;
        state_tmp = "correct";
      }

      let col = {
        row: i,
        col: j,
        value: value,
        answer: answer,
        state: state_tmp,
        readonly: value !== null,
      };
      row.cols.push(col);
    }
    result.rows.push(row);
  }
  return result;
}

// console.log(easy);

function App() {
  const initialGrid = generateCrosswordle(easy);
  const possibleLetters = easy;
  const [grid, setGrid] = useState(initialGrid);
  let eachCellsNeighbours = generateNeighbours(initialGrid);

  const [showModal, setShowModal] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    checkWin();
  }, [correctCount]);

  const checkWin = () => {
    if (correctCount === 25) {
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
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        const cell = newGrid.rows[i].cols[j];
        if (cell.value === cell.answer) {
          newGrid.rows[i].cols[j].state = "correct";
          newGrid.rows[i].cols[j].readonly = true;
        } else if (
          eachCellsNeighbours.rows[i].cols[j].neighbours.includes(cell.value)
        ) {
          newGrid.rows[i].cols[j].state = "wrong-location";
        } else {
          newGrid.rows[i].cols[j].state = "wrong";
        }
        updateCorrectCellCount(cell);
        eachCellsNeighbours = generateNeighbours(newGrid);
      }
    }
    setGrid(newGrid);
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
      <div className="App">
        <header className="title is-1 mt-1">
          <h1>Crosswordle</h1>
        </header>
        <hr className="solid mb-6"></hr>
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
                Score:
              </p>
              <Score score={score} key={"refreshedScore"} />
              <p
                id="correct-cells-label"
                className="is-size-6-touch is-size-5-tablet is-size-4-desktop m-1"
              >
                Correct Cells:
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
                Cells
              </button>
              <HowToPlay key={"howToPlay"} />
            </div>
          </div>
        </div>

        <div className="container">
          {showModal && (
            <div className="modal is-active">
              <div className="modal-background"></div>
              <div className="modal-content">
                <div className="box">
                  <p>You win! Your final score is: {score}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
