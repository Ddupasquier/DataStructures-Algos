var firstMissingPositive = function (nums) {
  if (nums.length === 0) return 1;

  if (nums.length === 1) {
    if (nums[0] !== 1) return 1;
    return 2;
  }

  let i = 0;
  while (i < nums.length) {
    if (nums[i] < 0 || nums[i] >= nums.length || nums[i] === nums[nums[i]]) {
      i++;
      continue;
    }
    swapArrayPositions(nums, i, nums[i]);
    if (nums[i] < nums.length && nums[i] !== i) continue;
    i++;
  }

  for (i = 1; i < nums.length; i++) {
    if (nums[i] !== i) return i;
  }
  return nums[0] === nums.length ? nums.length + 1 : nums.length;
};

const swapArrayPositions = (array, index1, index2) => {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};
