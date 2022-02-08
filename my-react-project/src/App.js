import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {

  const [score, setScore] = useState(0)

  function updateScore() {
    const newScore = score
    newScore += 1
    setScore(newScore)
  }

  return(
    <button onClick={updateScore}>Check Solution</button>
    <Score score={score} />
  )
}

export default App;
