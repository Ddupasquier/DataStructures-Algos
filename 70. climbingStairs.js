// write climbStairs function which return amount of possible combinations of 1 and 2 steps to climb the stairs based on n amount of stairs
// e.g. climbStairs(2) => 2
// e.g. climbStairs(3) => 3
// e.g. climbStairs(4) => 5
// e.g. climbStairs(5) => 8

function climbStairs(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let a = 1;
  let b = 2;
  let c = 0;

  for (let i = 3; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  return c;
}

// write fibonacci function which return nth fibonacci number recursively
function climbStairsRecursive(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  return climbStairsRecursive(n - 1) + climbStairsRecursive(n - 2);
}

console.log(climbStairs(45));
