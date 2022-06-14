// Given an integer num, return the number of steps to reduce it to zero.

// In one step, if the current number is even, you have to divide it by 2,
// otherwise, you have to subtract 1 from it.

var numberOfSteps = function (num) {
  let stepCount = 0;

  while (num !== 0) {
    if (num % 2 === 0) {
      num /= 2;
      stepCount++;
    } else {
      num -= 1;
      stepCount++;
    }
  }
  return stepCount;
};

console.log(numberOfSteps(52));
