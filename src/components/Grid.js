import React from "react";
import Cell from "./Cell";

export default function Grid({ grid, changeCell }) {
  return (
    <div>
      <center>
        {grid.rows.map((row) => (
          <div className="row" key={row.index}>
            {row.cols.map((field) => (
              <Cell field={field} key={field.col} changeCell={changeCell} />
            ))}
          </div>
        ))}
      </center>
    </div>
  );
}
