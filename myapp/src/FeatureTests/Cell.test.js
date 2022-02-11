import React from "react";
import { cleanup, render } from "@testing-library/react";
import '@testing-library/jest-dom'
import Cell from "../Cell"

afterEach(cleanup);

it('cell has an input form', () => {
  const {container, getByCell} = render(<Cell />)
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="cell"
    >
      <form>
        <input
          id="0,0"
          maxlength="1"
          type="text"
        />
      </form>
    </div>
  `)
})