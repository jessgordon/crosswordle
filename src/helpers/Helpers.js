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

export { parseWords, getDayNumber };
