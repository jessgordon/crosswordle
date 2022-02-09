import React from "react";
import updateScore from "../App"
import { cleanup, fireEvent, render } from "@testing-library/react";
import Score from "../Score"
import App from "../App"

afterEach(cleanup);

afterEach(cleanup);

it('is initialized with a score of 0', () => {
  const {container, getByScore} = render(<Score score={0} />)
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      id="score"
    >
      0
    </div>
  `)
})
 
it("increases the score by 1 when clicked", () => {
  const {queryCheckSolution, getCheckSolution } = render(
    <App/>,
    );

    const button = document.querySelector("[id=check-solution]")
    expect(button.innerHTML).toBe("check solution")

    const score = document.querySelector("[id=score]")
    expect(score.innerHTML).toBe("0")

  // const updateScore = NewScore

  fireEvent.click(button);
  expect(score.innerHTML).toBe("1")

  // expect(updateScore()).toBe(1)
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