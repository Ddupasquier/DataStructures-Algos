var kthFactor = function (n, k) {
  let i = 0;
  let factors = [];
  while (i <= n) {
    if (n % i == 0) {
      factors.push(i);
      i++;
    } else {
      i++;
    }
  }
  if (factors[k - 1] !== undefined) {
    return factors[k - 1];
  } else {
    return -1;
  }
};

console.log(kthFactor(128493202, 3));
console.log(kthFactor(7, 2));