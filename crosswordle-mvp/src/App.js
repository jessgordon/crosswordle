import React, { useState, useRef, useEffect } from "react";
import { RAW_LETTERS, CELL_ANSWERS, GREY } from "./data/data";
import Grid from "./components/Grid";
import "./App.css";

// {rows: [{index:0, cols: [{row:0, col: 0, value:1, readonly: true }]}]}
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

  // useEffect(()=>{
  //   for (let i=0; i<5; i++) {
  //     for (let j=0; j<5; j++) {
  //       if (grid.rows[i].cols[j].value === grid.rows[i].cols[j].answer) {
  //         grid.rows[i].cols[j].readonly = true
  //       }
  //     }
  //   }
  // },[grid])

  function checkCell(e) {
    e.preventDefault();
    const input = e.target.value.toUpperCase();
    const r = e.target.attributes.row.value;
    const c = e.target.attributes.col.value;
    const newGrid = { ...grid };

    newGrid.rows[r].cols[c].value = input;
    if (grid.rows[r].cols[c].value === grid.rows[r].cols[c].answer) {
      grid.rows[r].cols[c].readonly = true;
    }
    console.log(e.target.attributes);
    console.log(newGrid.rows[r].cols[c]);
    setGrid(newGrid);
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <center>
            <h1>Crosswordle</h1>
          </center>
        </header>
        <Grid grid={grid} checkCell={checkCell} />
      </div>
    </>
  );

  //  return (
  //     CELL_ANSWERS.map((cellObject) => { return (<div>
  //       key={`${cellObject.coordinates[0]},${cellObject.coordinates[1]}`} ref={(element) => {refs.current[cellObject.input] = element}}</div>);
  //     })
  //   )

  // return(
  //   <>
  //     <input ref={cellRef} type='text'/>
  //     <button onClick={readCellInput}>Check solution</button>
  //   </>
  // );
}

export default App;
