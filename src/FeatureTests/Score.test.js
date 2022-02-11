import React from "react";
import updateScore from "../App"
import { cleanup, fireEvent, render } from "@testing-library/react";
import Score from "../components/Score"
import App from "../App"

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
  expect(button.innerHTML).toBe("Check<br>Cells")

  const score = document.querySelector("[id=score]")
  expect(score.innerHTML).toBe("0")

  fireEvent.click(button);
  expect(score.innerHTML).toBe("1")

  fireEvent.click(button);
  expect(score.innerHTML).toBe("2")
})


// test once button clicked 5 times, button is disabled from further use