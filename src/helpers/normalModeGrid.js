// Takes in a list of parsedChars e.g ["A","B","C"....]
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
        value = "";
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
export { generateNormalGrid };
