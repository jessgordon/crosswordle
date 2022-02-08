import logo from './logo.svg';
import './App.css';

function App({ checkSolution, colourChange, cells }) {

  // checkSolution function => assign a colour for each cell

  return (
    cells.map(cell =>
      return <Cell key={cell.coordinate} cell={cell} colour={colour} />
    )
  )
}

export default App;