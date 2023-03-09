// Given an array arr[] of positive integers of size N. Reverse every sub-array group of size K.

// Note: If at any instance, there are no more subarrays of size greater than or equal to K, then reverse the last subarray (irrespective of its size). You shouldn't return any array, modify the given array in-place.

// Input:
// N = 5, K = 3
// arr[] = {1,2,3,4,5}
// Output: 3 2 1 5 4
// Explanation: First group consists of elements
// 1, 2, 3. Second group consists of 4,5.

var reverseInGroups = function(arr, n, k){
  for(let i = 0; i < n; i += k){
    let left = i;
    //This is important to remenber.
    let right = Math.min(i+k - 1, arr.length - 1);
    while(left < right){
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }
  return arr;
}

console.log(reverseInGroups([5, 6, 8, 9, 10, 11, 22],7, 3));
