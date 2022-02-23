const arr9 = [5, 6, 8, 9, 10, 11, 22];
const k = 3;

function reverseInGroups(arr, k) {
  for (let i = 0; i < arr.length; i += k) {
    let left = i;
    let right = Math.min(i + k - 1, arr.length - 1);
    while (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }

  return console.log(arr);
}

reverseInGroups(arr9, k);
