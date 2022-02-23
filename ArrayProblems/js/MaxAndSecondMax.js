const arr5 = [2, 1, 2, 1000, 198277, 984848, 8874, 292839, 989];

function largestAndSecondLargest(arr) {
  if (arr.length < 2) return console.log([arr[0], -1]);
  let firstMax = arr[0];
  let secondMax = -1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > firstMax) {
      secondMax = firstMax;
      firstMax = arr[i];
    } else if (arr[i] > secondMax && arr[i] != firstMax) {
      secondMax = arr[i];
    }
  }
  return console.log([firstMax, secondMax]);
}

largestAndSecondLargest(arr5);
