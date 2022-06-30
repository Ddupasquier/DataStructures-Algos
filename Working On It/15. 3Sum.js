const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  let result = [];
  if (nums.length < 3) return result;

  for (let lead = 0; lead < nums.length; lead++) {
    let left = lead + 1,
      right = nums.length - 1;
    if (lead > 0 && nums[lead - 1] === nums[lead]) continue;
    while (left < right) {
      const total = nums[lead] + nums[left] + nums[right];
      if (total === 0) {
        result.push([nums[lead], nums[left], nums[right]]);
        left++;
        right--;

        // make sure we increment the left pointer past any possible duplicates
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
      } else if (total < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
};


// const threeSum = (nums) => {

// }

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 0, 0, 0]));
