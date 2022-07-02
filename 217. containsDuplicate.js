const containsDuplicate = (nums) => {
  let set = new Set();
  for (const num of nums) {
    if (!set.has(num)) {
      set.add(num);
    } else {
      return true;
    }
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
