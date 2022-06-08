const findPairs = (nums) => {
  const numsSet = new Set();
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!numsSet.has(nums[i])) {
      numsSet.add(nums[i]);
    } else {
      numsSet.delete(nums[i]);
      count++;
    }
  }
  return count;
};

console.log(findPairs([1, 2, 1, 2, 1, 3, 2, 1, 1, 1, 1, 2, , 2, 4, 4, 5]));
// 1112223
