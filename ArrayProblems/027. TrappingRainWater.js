// Given an array of N non-negative integers arr[] representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

// Input: arr[] = {2, 0, 2}
// Output: 2
// Input: arr[]   = {3, 0, 2, 0, 4}
// Output: 7
// Input: arr[] = {0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1}
// Output: 6
var trap = function(height) {
    let n = height.length;
    let water = 0;
    let left = new Array(n);
    let right = new Array(n);
    left[0] = height[0]; 
    for(let i = 1; i < n; i++){
        left[i] = Math.max(left[i-1], height[i]);      
    }
   left;
    right[n-1] = height[n-1];
    for(let i = n - 2; i >= 0  ; i--){
        right[i] = Math.max(right[i+1], height[i]);        
    }
   right;
  
    for(let i = 0; i < n; i++){
        water += (Math.min(left[i], right[i]) - height[i]);
    }
    return water;
};

console.log(trap([2,0,3]));
console.log(trap([3,0,2,0,4]));
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));

