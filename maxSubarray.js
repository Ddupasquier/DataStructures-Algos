/*

Given an integer array nums, find the contiguous subarray 
(containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

*/

var maxSubArray = function (nums) {
  let max = -Infinity;
  let sum = -1;
  for (let i = 0; i < nums.length; i++) {
    if (sum < 0) {
      sum = nums[i];
    } else {
      sum += nums[i];
    }
    if (sum > max) max = sum;
  }
    return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
