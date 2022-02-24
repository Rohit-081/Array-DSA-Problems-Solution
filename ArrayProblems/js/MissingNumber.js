const missingArray = [-1, 0, 3, 4, -10, -20, 1];

function missingNumber(arr) {
  const mySet = new Set(arr);
  let x = 1;
  while (x <= arr.length + 1) {
    if (!mySet.has(x)) {
      return console.log(x);
    }
    x++;
  }
}

missingNumber(missingArray);
