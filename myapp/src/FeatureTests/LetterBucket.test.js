import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import LetterBucket from "../LetterBucket"

afterEach(cleanup); 

it('returns letters in a div', () => {
  const {container, getByLetter} = render(<LetterBucket answer={'F'} />)
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="letterBucket"
    >
    <div
      class="randomLetter"
      id="0"
      >
      F
      </div>
    </div>
  `)
})

// it('returns letters in a random order', () => {
//   const {container, getByScore} = render(<Score score={0} />)
//   expect(container.firstChild).toMatchInlineSnapshot(`
//     <div
//       id="score"
//     >
//       0
//     </div>
//   `)
// })
 