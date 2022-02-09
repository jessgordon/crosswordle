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
      <div className='randomLetter'>arr[j]</div>
    }

    return arr
  }

  return (
    
    // <>
    //   <div className='letterBucket'>
    //     {
    //       let arr = randomiseAnswer(answer)
    //       for(let i = 0; i < 24; i++) {
    //         <div className='randomLetter'>arr[i]</div>
    //       }
    //     }
    //   </div>
    // </>
  );
}
