import React, { useState, useEffect } from "react";
import { RAW_LETTERS } from "./data/data";
import Grid from "./components/Grid";
import "./App.css";

function generateCrosswordle() {
  const raw = RAW_LETTERS;
  const result = { rows: [] };

  for (let i = 0; i < 5; i++) {
    const row = { cols: [], index: i };
    for (let j = 0; j < 5; j++) {
      const answer = raw[i * 5 + j];
      let value = null;
      if (i === 0) {
        value = raw[j];
      }
      const col = {
        row: i,
        col: j,
        value: value,
        answer: answer,
        readonly: value !== null,
      };
      row.cols.push(col);
    }
    result.rows.push(row);
  }
  return result;
}

function App() {
  const [grid, setGrid] = useState(generateCrosswordle());
  const [showModal, setShowModal] = useState(false);
  const [correctCount, setcorrectCount] = useState(0);
  const [score, setScore] = useState(0);

  
  useEffect(()=>{
    checkWin()
  },[correctCount])

  const checkWin = () => {
    if (correctCount === 25) {
      console.log("You win");
      setShowModal(true);
    }
  };

  const changeCell = (e) => {
    e.preventDefault();
    const input = e.target.value.toUpperCase();
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
          newGrid.rows[i].cols[j].readonly = true;
        }
        updateCorrectCellCount(cell);
      }
    }
    setGrid(newGrid);
    setScore((prevScore) => prevScore + 1);
  };

  const updateCorrectCellCount = (cell) => {
    if (cell.readonly) {
      setcorrectCount((prevCount) => prevCount + 1);
    }
  };

  const onClickCheckWrapper = () => {
    setcorrectCount(0);
    checkGrid()
  };

  return (
    <>
      <div className="App">
        <header className="app-header">
          <h1>Crosswordle</h1>
        </header>
        <Grid grid={grid} changeCell={changeCell} />
      </div>

      <div className="container">
        <button className="check-button" onClick={onClickCheckWrapper}>
          Check Cells
        </button>
      </div>

      <div className="container">Score: {score}</div>

      <div className="container">
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <p>You win! Your final score is: {score}</p>
            </div>
          </div>
        )}
      </div>

      <div className="container">(Correct cells: {correctCount})</div>
    </>
  );
}

export default App;
