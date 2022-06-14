var containsDuplicate = function (nums) {
  let i = 0;
  let set = new Set();
  while (i < nums.length) {
    let current = nums[i];
    if (!set.has(current)) {
      set.add(current);
      i++;
    } else {
      return true;
    }
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
