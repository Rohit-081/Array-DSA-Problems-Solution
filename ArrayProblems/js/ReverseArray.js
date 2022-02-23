const arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function arrayReversal(arr) {
  let temp;
  for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
    temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return console.log(arr);
}

arrayReversal(arr8);
