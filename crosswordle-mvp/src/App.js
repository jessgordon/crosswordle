import React, { useState } from "react";
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
  const [count, setCount] = useState();
  const [score, setScore] = useState(0);

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
    setCount(0);
    const newGrid = { ...grid };
    for (let i = 0; i < 5; i++) {
      const row = newGrid.rows[i];
      for (let j = 0; j < 5; j++) {
        const col = row.cols[j];
        if (col.value === col.answer) {
          newGrid.rows[i].cols[j].readonly = true;
        }
        if (col.readonly) {
          setCount((prevCount) => prevCount + 1);
        }
      }
    }
    setScore((prevScore) => prevScore + 1);
    setGrid(newGrid);
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
        <button className="check-button" onClick={checkGrid}>
          Check Cells
        </button>
      </div>

      <div className="container">Score: {score}</div>

      <div className="container">        
        <div className={count === 25 ? "modal" : "hidden"}> 
          <div className='modal-content'>
            <p>You win! Your final score is: {score}</p>
          </div>
        </div>
      </div>

      <div className="container">Correct cells: {count}</div>

    </>
  );
}

export default App;
