// 150. Evaluate Reverse Polish Notation

// Evaluate the value of an arithmetic expression in Reverse Polish Notation.

// Valid operators are +, -, *, and /. Each operand may be an integer or another
// expression.

// Note that division between two integers should truncate toward zero.

// It is guaranteed that the given RPN expression is always valid. That means the
// expression would always evaluate to a result, and there will not be any division
// by zero operation.

// * Input: tokens = ["2","1","+","3","*"]
// ! Output: 9
// Explanation: ((2 + 1) * 3) = 9

var evalRPN = function (tokens) {
  const stack = [];
  const operators = '+-*/';
  const mathItUp = {
    '+': function (a, b) {
      return a + b;
    },
    '*': function (a, b) {
      return a * b;
    },
    '-': function (a, b) {
      return a - b;
    },
    '/': function (a, b) {
      return Math.trunc(a / b);
    },
  };

  let i = 0;
  while (i < tokens.length) {
    if (!operators.includes(tokens[i])) {
      stack.push(parseInt(tokens[i]));
    } else {
      const nums = stack.splice(stack.length - 2, 2);
      stack.push(mathItUp[tokens[i]](nums[0], nums[1]));
    }
    i++;
  }
  return stack[0];
};

console.log(evalRPN(['2', '1', '+', '3', '*']));
console.log(
  evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])
);
