var kadane = function (nums) {
	let sum = 0;
	let max = nums[0];
	for (let i = 0; i < nums.length; i++) {
	  sum = sum + nums[i];
	  max = Math.max(max, sum);
	  if (sum < 0) {
		sum = 0;
	  }
	}
	return max;
  };
  
  console.log(kadane([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
  console.log(kadane([-2, -1, -3, -4, -1, 12, -1, -5, 4]));