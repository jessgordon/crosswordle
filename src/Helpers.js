import {SliceArray} from "slice"

function getDayNumber() {
  let now = new Date();
  let start = new Date(now.getFullYear(), 0, 0);
  let diff =
    now -
    start +
    (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
  let oneDay = 1000 * 60 * 60 * 24;
  let dayNumber = Math.floor(diff / oneDay) % 365;
  return dayNumber
}

function parseWords(words) {
  return words.split("").map((chars) => chars.toUpperCase());
}

// Takes in a list of parsedChars e.g ["A","B","C"....]
function generateGrid(parsedChars) {
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
        if (cell.col !== j) {
          charsExcludingSelf.push(cell.answer);
        }
        if (cell.answer === cell.value) {
          charsExcludingSelf.splice(charsExcludingSelf.indexOf(cell.answer), 1);
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
  // B (0,0) should have row = L,O,O,D; col = O,S,O,M
  let gridCopy = {...gridObject}

  for (let i = 0; i < 5; i++) {
    let row = { cols: [], index: i };

    for (let j = 0; j < 5; j++) {
      let charsExcludingSelf = [];
                  
      for (let cell of gridCopy.rows[i].cols) {
        // console.log(cell)
        if (cell.col !== j) {
          charsExcludingSelf.push(cell.answer);
          if (i % 2 === 0) {
            for (let row of gridCopy.rows) {
              // console.log("Grid copy", row)
              if (row.cols[j].col === j)
                
                charsExcludingSelf.push(row.cols[j].answer)
            }
            
          }
        }

        if (cell.answer === cell.value) {
          charsExcludingSelf.splice(charsExcludingSelf.indexOf(cell.answer), 1);
        }
      }

      console.log(charsExcludingSelf)
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

export {
  generateGrid,
  generateRowNeighbours,
  generateRowColNeighbours,
  parseWords,
  getDayNumber,
};
