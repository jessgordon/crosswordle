import React from 'react';

export default function LetterBucket(answer) {

  function getRandomInt(n) {
    return Math.floor(Math.random() * n);
  }

  function randomiseAnswer(answer) {
    let arr = answer.split('');
    const n = 25;

    for(let i=0 ; i < n-1 ; ++i) {
      let j = getRandomInt(n)

      let current_element = arr[i];
      arr[i] = arr[j];
      arr[j] = current_element;
      // <div className='randomLetter'>arr[j]</div>
    }

    return arr
  }

  const arr = randomiseAnswer(answer)
  return (
    
    <>
      <div className='letterBucket'>
        {
          arr.forEach(letter => <div className='randomLetter'>arr[i]</div> )
          
        }
      </div>
    </>
  );
}
