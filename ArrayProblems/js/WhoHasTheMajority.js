const arr3 = [1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5];
const x = 4;
const y = 5;
const n = 11;

const arr4 = [1, 2, 2, 3, 3, 4, 4, 5];
const x1 = 2;
const y1 = 3;
const n1 = 8;

function majorityWins(arr, n, x, y) {
  let a = x;
  let b = y;
  let countA = 0;
  let countB = 0;
  for (let i = 0; i < arr.length; i++) {
    if (a === arr[i]) {
      countA = countA + 1;
    }
    if (b === arr[i]) {
      countB = countB + 1;
    }
  }
  if (countA !== countB) {
    var result = countA > countB ? a : b;
    return console.log(result);
  } else {
    if (a < b) {
      return console.log(a);
    } else {
      return console.log(b);
    }
  }
}

majorityWins(arr3, n, x, y);
majorityWins(arr4, n1, x1, y1);
