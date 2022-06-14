const removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    const j = i + 1;
    while (nums[i] === nums[j]) {
      nums.splice(j, 1);
    }
  }
  return nums;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3, 4, 4, 4, 5, 5, 6]));
