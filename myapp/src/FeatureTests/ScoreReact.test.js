import React from "react";
import updateScore from "../App"
import { cleanup, fireEvent, render } from "@testing-library/react";
import Score from "../Score"

afterEach(cleanup);
 
it("increases the score by 1 when clicked", () => {
  const {queryCheckSolution, getCheckSolution } = render(
    <CheckSolution/>,
  );
  const score = NewScore

  fireEvent.click(getCheckSolution);

  expect(NewScore).toBe(1)
  })
//   ) = jest.fn();
//   act(() => {
//     render(<Score onChange={onChange} />, container);
//   });

//   const button = document.querySelector("[id=check-solution]")
//   expect(button.innerHTML).toBe("check solution")

//   act(() => {
//     button.dispatchEvent(new MouseElement("click", { bubbles: true }));
//   });

//   expect(onChange).toHaveBeenCalledTimes(1);
  
//   act(() => {
//     for (let i = 0; i < 5; i++) {
//       button.dispatchEvent(new MouseEvent("click", { bubbles: true
//     }));
//       }
//   });

//   expect(onChange).toHaveBeenCalledTimes(6);
// };

// // test('score increases by 1 when button pressed', () => {
// //   render(<Score />;)
// //   expect(score).toBe eq(2);
// // })