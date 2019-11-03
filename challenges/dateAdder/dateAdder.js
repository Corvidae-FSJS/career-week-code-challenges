function dateAdder(date, diff) {
  let result;
  const diffChar = diff.slice(-1);
  const diffNum = Number(diff.slice(0, diff.length - 1));

  if(diffChar === 's') result = new Date(date.setSeconds(date.getSeconds() + diffNum));
  if(diffChar === 'm') result = new Date(date.setMinutes(date.getMinutes() + diffNum));
  if(diffChar === 'h') result = new Date(date.setHours(date.getHours() + diffNum));
  if(diffChar === 'd') result = new Date(date.setDate(date.getDate() + diffNum));
  if(diffChar === 'w') result = new Date(date.setDate(date.getDate() + diffNum * 7));
  if(diffChar === 'M') result = new Date(date.setMonth(date.getMonth() + diffNum));
  if(diffChar === 'y') result = new Date(date.setFullYear(date.getFullYear() + diffNum));

  return result;
}

module.exports = dateAdder;