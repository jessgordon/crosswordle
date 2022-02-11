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
      <div className="container">
        <div className="row">
          <div className="column">
            <ul>
              <li>Co-ordinate match</li>
              <li>Close</li>
              <li>No match</li>
              <li>Fixed characters</li>
            </ul>
          </div>

          <div className="column">
            <h1> Crosswordle </h1>
          </div>

          <div className="column"> 
            <Score score={score} key={"refreshedScore"} />
            <button id='check-solution' onClick={updateScore}>check<br/>solution</button>
          </div> 
        </div>     
      </div>
    </>
  );
}

export default App;
