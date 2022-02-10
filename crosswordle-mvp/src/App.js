import React, { useState } from "react";
import { RAW_LETTERS } from "./data/data";
import Grid from "./components/Grid";
import "./App.css";
import {SliceArray} from "slice"

function generateNeighbours() {
  const dummy = SliceArray(...RAW_LETTERS)
  const result = { rows: [] };
  for (let i = 0; i < 5; i++) {
    const row = { cols: [], index: i };
    for (let j = 0; j < 5; j++) {
      
      let row_n = dummy[[i*5,(i*5)+5]]
      let col_n = dummy[[j,,5]]
      let neighbourSet = new Set([...row_n, ...col_n])
    
      const attributes = {
        row: i,
        col: j,
        neighbours: neighbourSet
      };
    row.cols.push(attributes);
    }
  result.rows.push(row);
  }
  return result;
}

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
        state: "",
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

  const neighbourObject = generateNeighbours()

  const changeCell = (e) => {
    e.preventDefault();
    const input = e.target.value.toUpperCase();
    const r = e.target.attributes.row.value;
    const c = e.target.attributes.col.value;
    const newGrid = { ...grid };

    newGrid.rows[r].cols[c].value = input;
    setGrid(newGrid);
  };
//if answer not eq value but letter is in grid then yellow
//if row or column it is in has that value == answer set to yellow
  const checkGrid = () => {
    setCount(0);
    const newGrid = { ...grid };
    for (let i = 0; i < 5; i++) {
      const row = newGrid.rows[i];
      for (let j = 0; j < 5; j++) {
        const col = row.cols[j];

        if (neighbourObject.rows[i].cols[j].neighbours.has(col.value)) {
          newGrid.rows[i].cols[j].state = "wrong-location";
        }
        else {newGrid.rows[i].cols[j].state = "wrong";}

        if (col.value === col.answer) {
          newGrid.rows[i].cols[j].state = "correct";
          newGrid.rows[i].cols[j].readonly = true;
        }
        if (col.readonly) {
          setCount((prevCount) => prevCount + 1);
        }
      
      }
      
    }
    console.log(newGrid.rows[1].cols[0])

    setScore((prevScore) => prevScore + 1);
    setGrid(newGrid);
  };

  return (
    <>
      <div className="App">
        <header className="appHeader">
          <h1>Crosswordle</h1>
        </header>
        <Grid grid={grid} changeCell={changeCell} />
      </div>

      <div className="container">
        <button className="checkButton" onClick={checkGrid}>
          Check Cells
        </button>
      </div>

      <div className="container">Score: {score}</div>

      <div className="container">
        {count === 25 && <div>You win! Your final score is: {score}</div>}
      </div>

      <div className="container">Correct cells: {count}</div>
    </>
  );
}

export default App;
