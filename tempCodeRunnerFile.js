
function getMathResult(num, repeatNumber) {
  if (typeof(repeatNumber) !== 'number' || repeatNumber <= 0) {
    return num;
  }
  let result = null;
  console.log(typeof(repeatNumber));
  
  for (let i = 1; i <= repeatNumber; i++) {
    result += num * i;
    if (repeatNumber === i) {
      break;
    }
    result += '---';
  }
  
    return result;
}

console.log(getMathResult(6, "7"));