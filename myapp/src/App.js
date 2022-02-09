import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Score from './Score.js';

function App() {

  const [score, setScore] = useState(0)

  function updateScore() {
    const newScore = score
    newScore += 1
    setScore(newScore)
  }

  return (
    <>
      <button onClick={updateScore}>check solution</button>
      <Score score={score} />
    </>
  );
}

export default App;
