var removeDuplicates = function (nums) {
  let i = 0;
  let j = i + 1;
  while (j < nums.length) {
    if (nums[i] === nums[j]) {
      nums.splice(i, 1);
    } else {
      i++;
      j++;
    }
  }
  return nums;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(
  removeDuplicates([
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6,
    7,
  ])
);
