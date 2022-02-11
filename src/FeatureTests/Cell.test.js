import React from "react";
import { cleanup, render } from "@testing-library/react";
import '@testing-library/jest-dom'
import Cell from "../components/Cell"

afterEach(cleanup);

it('cell has an input form', () => {
  const field = { 
  row: 0,
  col: 0,
  value: "F",
  answer: "F",
  readonly: "F" !== null
  }
  const changeCell = jest.fn();
  const {container, getByCell} = render(<Cell field={field} key={field.col} changeCell={changeCell}/>)
  expect(container.firstChild).toMatchInlineSnapshot(`
    <input
      answer="F"
      class="correct"
      col="0"
      maxlength="1"
      readonly=""
      row="0"
      value="F"
    />
  `)
})