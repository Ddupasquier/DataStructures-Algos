// Given an array of integers arr of even length n and an integer k.

// We want to divide the array into exactly n / 2 pairs such that the sum of
// each pair is divisible by k.

// Return true If you can find a way to do that or false otherwise.

var canArrange = function (arr, k) {
  const newArr = [...arr].sort((a, b) => a - b);
  let j = newArr.length - 1;
  let i = 0;
  while (j > i) {
    if ((newArr[i] + newArr[j]) % k === 0) {
      return true;
    } else if (newArr[i] + newArr[j] < k) {
      i++;
    } else {
      j--;
    }
  }
  return false;
};

// true
console.log(canArrange([1, 2, 3, 4, 5, 10, 6, 7, 8, 9], 5));
// true
console.log(canArrange([1, 2, 3, 4, 5, 6], 7));
// true
console.log(canArrange([3, 8, 7, 2], 10));
// true
console.log(canArrange([1, 2, 3, 4, 5, 6], 10));
