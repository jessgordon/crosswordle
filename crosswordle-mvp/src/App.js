import React, {useState, useRef, useEffect} from 'react'
import { CELL_ANSWERS, GREY } from './data/data'

function App() {
  const [cells, setCells] = useState([])
  let cell_answers = CELL_ANSWERS
  const cellRef = useRef()

  function readCellInput() {
    const input = cellRef.current.value
    cell_answers[0].input = input 
    if (input === '') return
    console.log(cell_answers[0])
  }

  function checkCellInput(coordinates) {
    
  }
  
  //  return (
  //     CELL_ANSWERS.map((cellObject) => { return (<div>
  //       key={`${cellObject.coordinates[0]},${cellObject.coordinates[1]}`} ref={(element) => {refs.current[cellObject.input] = element}}</div>);
  //     })
  //   )
  
  // CELL_ANSWERS.map(cell => {
  //   console.log(cell.coordinates, cell.colour, cell.answer)
  // })
  return(
    <>
      <input ref={cellRef} type='text'/>
      <button onClick={readCellInput}>Check solution</button>
    </>
);
}

export default App;
