import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Score from './Score.js';
import LetterBucket from './LetterBucket.js'

function App() {

  const [score, setScore] = useState(0)
  const answer = 'FIRMSIDIOMLASSOCHEEKHORSY'

  function updateScore() {
    let newScore = score
    newScore += 1
    setScore(newScore)
  }

  return (
    <>
      <button id='check-solution' onClick={updateScore}>check solution</button>
      <Score score={score} />
      <LetterBucket answer={answer} />
    </>
  );
}

export default App;
