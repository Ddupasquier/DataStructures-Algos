var runningSum = function (nums) {
  let j = 1;
  let sums = [nums[0]];
  while (j < nums.length) {
    sums.push(sums[sums.length - 1] + nums[j]);
    j++;
  }
  return sums;
};

console.log(runningSum([1, 2, 3, 4]));
