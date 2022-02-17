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
  // P (0,0) should have row = ASTY; col = EDAL
  // "pasty,e*o*i,delve,a*a*l,lurid"
  // let tmp = []
  // for (let i=0;i<5;i++) {
  //   for (let j=0;j<5;j++) {
  //     tmp.push({ ...gridObject }.rows[i].cols[j].answer)
  //   }}
  // console.log(tmp)

  for (let i=0;i<5;i++) {
    let y = { ...gridObject }.rows[i].cols; // list of cells
    let x = { ...gridObject }.rows // list of cols
    for (let j=0;j<5;j+=2) {
      let tempArray = []

      for (let k=0;k<5;k++) {
        if (x[k].cols[j].row !== i) {
        
        tempArray.push(x[k].cols[j].answer)
        }
      }

      for (let l=0;l<5;l++) {
        if (y[l].col !== j) {
          tempArray.push(y[l].answer)
        }
      }  
      // if (y[j].answer === y[j].value) {
      //   tempArray.splice(tempArray.indexOf(y[j].answer), 1);
      // }
      
      console.log(`${i},${j}`, tempArray)    

    }  
  }}

  // let sliceableArray = SliceArray(...tempArray)
  //     console.log(sliceableArray)
  
 
  // for (let i = 0; i < 5; i++) {
  //   // let row = { cols: [], index: i }

  //   for (let j = 0; j < 5; j++) {
  //     // let charsExcludingSelf = [];
                  
  //     // for (let cell of gridCopy.rows[i].cols) {
  //       let row_n = sliceableArray[[i * 5, i * 5 + 5]];
  //       let col_n = sliceableArray[[j, , 5]];
  //       let neighbours = [...row_n, ...col_n]
  //       console.log(neighbours)
  //   }}
  // }

//         if (cell.col !== j) {
//           charsExcludingSelf.push(cell.answer);
//           if (i % 2 === 0) {
//             for (let row of gridCopy.rows) {
//               // console.log("Grid copy", row)
//               if (row.cols[j].col === j)
                
//                 charsExcludingSelf.push(row.cols[j].answer)
//             }
            
//           }
//         }

//         if (cell.answer === cell.value) {
//           charsExcludingSelf.splice(charsExcludingSelf.indexOf(cell.answer), 1);
//         }
//       }

//       console.log(charsExcludingSelf)
//       let attributes = {
//         row: i,
//         col: j,
//         neighbours: charsExcludingSelf,
//       };

//       row.cols.push(attributes);
//     }
//     result.rows.push(row);
  
//   return result;
// }

export {
  generateGrid,
  generateRowNeighbours,
  generateRowColNeighbours,
  parseWords,
  getDayNumber,
};
