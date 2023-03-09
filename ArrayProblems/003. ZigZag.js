// Given an array of distinct elements of size N, the task is to rearrange the elements of the array in a zig-zag 
// fashion so that the converted array should be in the below form: 


// Input: N = 7 , arr[] = {4, 3, 7, 8, 6, 2, 1} 
// Output: arr[] = {3, 7, 4, 8, 2, 6, 1}
// Explanation: The given array is in zig-zag pattern as we can see 3 < 7 > 4 < 8 > 2 < 6 >1

// Input: N = 4 , arr[] = {1, 4, 3, 2} 
// Output: arr[] = {1, 4, 2, 3}
// Explanation: The given array is in zig-zag pattern as we can see 1 < 4 > 2 < 3

var zigzag = function (arr, n) {
  let flag = true;
  let temp;
  for (let i = 0; i <= n - 2; i++) {
    if (flag) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    } else {
      if (arr[i] < arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    flag = !flag;
  }
  return arr;
};

console.log(zigzag([4, 3, 7, 8, 6, 2, 1], 7));
console.log(zigzag([1, 2, 3, 4, 6, 5, 7], 7));
