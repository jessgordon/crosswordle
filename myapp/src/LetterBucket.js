import React from 'react'
import Letter from './Letter.js'

export default function LetterBucket(answer) {
  function getRandomInt(n) {
    return Math.floor(Math.random() * n);
  }

  function randomiseAnswer(answer) {
    let arr = (answer.answer).split("");
    const n = arr.length;

    for(let i=0 ; i < n-1 ; ++i) {
      let j = getRandomInt(n)

      let current_element = arr[i];
      arr[i] = arr[j];
      arr[j] = current_element;
    }

    return arr
  }

  const arr = randomiseAnswer(answer)
  
  return (
    <>
      <div className='letterBucket' key={'letter-bucket'}>
        {
          arr.map((letter, index) => (
              <Letter key={`letter-${index}`} letter={letter} index={index} />
            )
          )
        }
      </div>
    </>
  );
}
