var productExceptSelf = function(nums) {
    /* Allocate memory for the product array */
    let output = new Array(nums.length).fill(nums[0]);
    /* Storing last element of array in a cache variable. */
    let cacheVar = nums[nums.length - 1];
    
    for(let i = 1; i < nums.length; i++){
        output[i] = output[i - 1] * nums[i];
    }
    
    output[nums.length - 1] = output[output.length - 2];

    for(let j = nums.length-2; j > 0; j--){
        output[j] = output[j - 1]*cacheVar;
        cacheVar = cacheVar * nums[j];
    }
    output[0] = cacheVar;
    return output;
};


console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([1,2,3,4,5,6]));