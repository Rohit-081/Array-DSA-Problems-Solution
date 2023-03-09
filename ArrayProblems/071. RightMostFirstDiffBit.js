function posOfRightMostDiffBit(m, o) {
  let n = m ^ o;
  let position = 1;
  if (n === 0) {
    return -1;
  }
  while (n > 0) {
    if ((n & 1) == 1) {
      break;
    }
    n = n >> 1;
    position++;
  }
  return position;
}

console.log(posOfRightMostDiffBit(11, 9));
console.log(posOfRightMostDiffBit(52, 4));
console.log(posOfRightMostDiffBit(9, 9));