function getDayNumber() {
  let now = new Date();
  let start = new Date(now.getFullYear(), 0, 0);
  let diff =
    now -
    start +
    (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
  let oneDay = 1000 * 60 * 60 * 24;
  let dayNumber = Math.floor(diff / oneDay) % 365;
  return dayNumber;
}

function parseWords(words) {
  return words.split("").map((chars) => chars.toUpperCase());
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

function generateRowColNeighbours(gridObject) {
  const result = { rows: [] };

  for (let i = 0; i < 5; i++) {
    let row = { cols: [], index: i };
    let rows = { ...gridObject }.rows;

    for (let j = 0; j < 5; j++) {
      let tempArray = [];

      // Neighbours along the column
      if (j % 2 === 0) {
        for (let k = 0; k < 5; k++) {
          if (
            rows[k].cols[j].row !== i &&
            rows[k].cols[j].answer !== rows[k].cols[j].value
          ) {
            tempArray.push(rows[k].cols[j].answer);
          }
        }
      }

      // Neighbours along the rows
      for (let l = 0; l < 5; l++) {
        if (
          rows[i].cols[l].col !== j &&
          rows[i].cols[l].answer !== rows[i].cols[l].value
        ) {
          tempArray.push(rows[i].cols[l].answer);
        }
      }

      let attributes = {
        row: i,
        col: j,
        neighbours: tempArray,
      };

      row.cols.push(attributes);
    }
    result.rows.push(row);
  }
  return result;
}

function sanitizeInput(e) {
  const { value, maxLength } = e.target;
  const input = value.slice(0, maxLength).toUpperCase();
  const r = e.target.attributes.row.value;
  const c = e.target.attributes.col.value;
  if (!/^[a-zA-Z]*$/.test(input)) {
    return ["", r, c];
  }
  return [input, r, c];
}

export {
  parseWords,
  getDayNumber,
  generateRowNeighbours,
  generateRowColNeighbours,
  sanitizeInput,
};
