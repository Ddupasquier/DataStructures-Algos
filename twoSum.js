var twoSum = function (nums, target) {
  const store = {};
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let diff = target - current;
    // Return answer if the current number was a diff from a previous number
    if (store[current] !== undefined) return [store[current], i];
    // Set diff to current index in store
    else store[diff] = i;
  }

  //   let a = 0;
  //   let b = nums.length - 1;
  //   let arr = [];

  //   while (a < nums.length) {
  //     if (nums[a] + nums[b] === target) {
  //       arr = [a, b];
  //       return arr;
  //     } else if (nums[a] + nums[b] > target) {
  //       b--;
  //     } else {
  //       a++;
  //     }
  //   }
};

console.log(twoSum([-3, 4, 3, 90], 0));
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([-1, -2, -3, -4, -5], -8));
