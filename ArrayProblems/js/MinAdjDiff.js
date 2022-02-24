const minAdjDiffArray = [8, -8, 9, -9, 10, -11, 12];

function minAdjDiff(arr) {
  if (arr.length < 2) return console.log(arr[0]);
  let diff = Math.abs(arr[0] - arr[arr.length - 1]);
  for (let i = 0; i < arr.length - 1; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) < diff) {
      diff = Math.abs(arr[i] - arr[i + 1]);
    }
  }
  return console.log(diff);
}
minAdjDiff(minAdjDiffArray);
