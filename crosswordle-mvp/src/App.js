import React, {useState, useRef, useEffect} from 'react'
import { RAW_LETTERS, CELL_ANSWERS, GREY } from './data/data'
import Grid from "./components/Grid"
import "./App.css"

// {rows: [{index:0, cols: [{row:0, col: 0, value:1, readonly: true }]}]}
function generateCrosswordle() {
  const raw = RAW_LETTERS
  const result = {rows: []}

  for (let i=0; i<5; i++) {
    const row = {cols: [], index: i}
    for (let j=0; j<5; j++) {
      const answer = raw[i*5+j]
      let value = null
      if (i === 0) {
        value = raw[j]
      }
      const col = {
        row: i,
        col: j,
        value: value,
        answer: answer,
        readonly: value !== null
      }
      row.cols.push(col)
    }
    result.rows.push(row)
  }
  
  console.log(result)
  return result 
}

function App() {
  const [grid, setGrid] = useState(generateCrosswordle())
  const [cells, setCells] = useState([])
  
  generateCrosswordle()
  return (
    <>
    <div className="App">
      <header className ="App-header">
        <h1>Crosswordle</h1>
      </header>
      <Grid grid={grid}/>
    </div>
    </>
  )










  // let cell_answers = CELL_ANSWERS
  // const cellRef = useRef()
  
  // function readCellInput() {
  //   const input = cellRef.current.value
  //   cell_answers[0].input = input 
  //   if (input === '') return
  //   console.log(cell_answers[0])
  // }

  // function checkCellInput(coordinates) {
    
  // }
  
  //  return (
  //     CELL_ANSWERS.map((cellObject) => { return (<div>
  //       key={`${cellObject.coordinates[0]},${cellObject.coordinates[1]}`} ref={(element) => {refs.current[cellObject.input] = element}}</div>);
  //     })
  //   )
  
  // CELL_ANSWERS.map(cell => {
  //   console.log(cell.coordinates, cell.colour, cell.answer)
  // })
  // return(
  //   <>
  //     <input ref={cellRef} type='text'/>
  //     <button onClick={readCellInput}>Check solution</button>
  //   </>
// );
}

export default App;
