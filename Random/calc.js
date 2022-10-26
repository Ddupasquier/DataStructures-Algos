const calc = (num1, num2, operator) => {
  if (
    operator !== '+' &&
    operator !== '-' &&
    operator !== '*' &&
    operator !== '/'
  ) {
    return 'invalid operator';
  }

  if (operator === '+') {
    return num1 + num2;
  }

  if (operator === '-') {
    return num1 - num2;
  }

  if (operator === '*') {
    if (num1 === 0) {
      return "can't * 0";
    }
    return num1 * num2;
  }

  if (operator === '/') {
    if (num1 === 0 || num2 === 0) {
      return "can't / by 0";
    }
    return num1 / num2;
  }
};

console.log(calc(1, 2, '+')); // 3
console.log(calc(1, 2, '-')); // -1
console.log(calc(1, 2, '*')); // 2
console.log(calc(1, 2, '/')); // 0.5
console.log(calc(1, 2, 'a')); // invalid operator
console.log(calc(1, 0, '/')); // can't / by 0
console.log(calc(0, 2, '+')); // 2
console.log(calc(1, 0, '-')); // 1
