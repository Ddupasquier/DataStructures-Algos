const search = (nums, target) => {
  for (let [index, num] of nums.entries()) {
    if (num === target) return index;
  }
  return -1;
};

console.log(search([1, 2, 3, 4, 5], 3));
console.log(search([1, 2, 3, 4, 5], 6));
console.log(search([1, 2, 3, 4, 5], 0));