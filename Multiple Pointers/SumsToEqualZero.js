// O(N) Solution
// Does this actually work?

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left] + arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}


console.log(sumZero([-4, -3, -2, -1, 1, 2, 3, 4]))
console.log(sumZero([-9, -3, -2, -1, 1, 2, 3, 4]))
console.log(sumZero([-4, -3, -6, -1, 1, 2, 3, 4]))
console.log(sumZero([-4, -3, -2, -1, 1, 2, 3, 4]))
console.log(sumZero([1, 2, 3, 4, 5, 6]))