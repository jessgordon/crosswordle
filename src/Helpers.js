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

function generateNormalGrid(parsedChars) {
  const result = { rows: [] };

  for (let i = 0; i < 5; i++) {
    let row = { cols: [], index: i };
    for (let j = 0; j < 5; j++) {
      let answer = parsedChars[i * 5 + j];
      let value = null;
      let state_tmp = "default";
      // Above state types should probably be declared as a constant elsewhere
      if (answer === "*") {
        value = " ";
        state_tmp = "blank";
      }
      if ((i % 4 === 0 && j % 4 === 0) || (i === 2 && j === 2)) {
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

function generateRowColNeighbours(gridObject) {
  const result = { rows: [] };
  // P (0,0) should have row = ASTY; col = EDAL
  // "pasty,e*o*i,delve,a*a*l,lurid"

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

      if (i === 0 && j == 0) {
        console.log(`${i},${j}`, tempArray);
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

export {
  generateEasyGrid,
  generateNormalGrid,
  generateRowNeighbours,
  generateRowColNeighbours,
  parseWords,
  getDayNumber,
};
