var twoSum = function (nums, target) {
  let store = {}
  for (let [i, num] of nums.entries()) {
    if (store[num] !== undefined) return [store[num], i]
    store[target-num] = i
  }

  // *The solution below is also valid and efficient. Just slightly different syntax
  // const store = {};
  // for (let i = 0; i < nums.length; i++) {
  //   let current = nums[i];
  //   // Diff is the remainder after subtracting our current value from the target value
  //   // So in the case of our first test, we will check -3 against the target. In order to achieve 0
  //   // from -3, we would need a positive 3.
  //   let diff = target - current;
  //   // We save the complimentary number to a hash map with a value equal to the index of 'cur'
  //   // Then we continue our iterations. When/if we come across the complimentary number in our array
  //   // we return the stored 'cur : i' as well as the index of where we found the found complimentary number
  //   if (store[current] !== undefined) return [store[current], i];
  //   // If not found add complment to hashmap and assign index of cur
  //   else store[diff] = i;
  // }
};

console.log(twoSum([-3, 4, 3, 90], 0));
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([-1, -2, -3, -4, -5], -8));
