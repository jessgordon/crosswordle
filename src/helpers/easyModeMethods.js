// Takes in a list of parsedChars e.g ["A","B","C"....]
function generateEasyGrid(parsedChars) {
  const result = { rows: [] };

  for (let i = 0; i < 5; i++) {
    let row = { cols: [], index: i };
    for (let j = 0; j < 5; j++) {
      let answer = parsedChars[i * 5 + j];
      let value = null;
      let state_tmp = "default";
      // Above state types should probably be declared as a constant elsewhere

      if (i === j) {
        value = answer;
        state_tmp = "correct";
      }

      let col = {
        row: i,
        col: j,
        value: value,
        answer: answer,
        state: state_tmp,
        readonly: value !== null,
      };
      row.cols.push(col);
    }
    result.rows.push(row);
  }
  return result;
}

// Generates neighbours for the diagonal mode i.e. only considers letters of a row
function generateRowNeighbours(gridObject) {
  const result = { rows: [] };
  for (let i = 0; i < 5; i++) {
    let row = { cols: [], index: i };
    let rowCopy = { ...gridObject }.rows[i].cols;

    for (let j = 0; j < 5; j++) {
      let charsExcludingSelf = [];
      for (let cell of rowCopy) {
        if (cell.col !== j && cell.answer !== cell.value) {
          charsExcludingSelf.push(cell.answer);
        }
      }

      let attributes = {
        row: i,
        col: j,
        neighbours: charsExcludingSelf,
      };

      row.cols.push(attributes);
    }
    result.rows.push(row);
  }
  return result;
}

export { generateEasyGrid, generateRowNeighbours };
