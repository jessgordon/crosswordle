import React, { useState } from "react";
import { RAW_LETTERS } from "./data/data";
import Grid from "./components/Grid";
import Score from './components/Score.js';
import LetterBucket from './components/LetterBucket.js'
import "./App.css";

function generateCrosswordle() {
  const raw = RAW_LETTERS;
  const result = { rows: [] };

  for (let i = 0; i < 5; i++) {
    const row = { cols: [], index: i };
    for (let j = 0; j < 5; j++) {
      const answer = raw[i * 5 + j];
      let value = null;
      for (let k = 0; k < 5; k++) {
      if (k === Math.floor(Math.random()*7)) {
        value = answer;
      }
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
  //  TODO: convert answer to RAW data
  const answer = RAW_LETTERS


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
        <div className="container">
          <div className="row">
            <div className="column">
              <ul>
                <div className="coordMatch"><li>Co-ordinate match</li></div>
                <div className="close"><li>Close</li></div>
                <div className="noMatch"><li>No match</li></div>
                <div className="fixedChar"><li>Fixed characters</li></div>
              </ul>
            </div>

            <div className="column">
              <header className="appHeader">
                <h1>Crosswordle</h1>
              </header>
              <Grid grid={grid} changeCell={changeCell} />
              <LetterBucket answer={answer} key={"letterbucket"}/>
            </div>

            <div className="column"> 
              <div className="container">
                <Score score={score} key={"refreshedScore"} />
                <button id="check-solution" onClick={checkGrid}>
                  Check<br/>Cells
                </button>
              </div>
              <div className="container">
                {count === 25 && <div>You win! Your final score is: {score}</div>}
              </div>
              <div className="correctCells">Correct cells: {count}</div>
            </div>
          </div> 
        </div>     
      </div>
    </>
  );
}

export default App;
