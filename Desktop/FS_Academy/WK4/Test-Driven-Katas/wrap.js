const wrap = (line, maxLen) => {
  if (line.length <= maxLen) {
    return line;
  }

  if (line.length >= maxLen && line.indexOf(' ') === -1) {
    return line;
  }

  const indexOfBlank = line.lastIndexOf(' ', maxLen);
  let split;
  let offSet;

  if (indexOfBlank > -1) {
    split = indexOfBlank;
    offSet = 1;
  } else {
    split = maxLen;
    offSet = 0;
  }
  return (
    line.substring(0, split) +
    '\n' +
    wrap(line.substring(split + offSet), maxLen)
  );
};

module.exports = wrap;
