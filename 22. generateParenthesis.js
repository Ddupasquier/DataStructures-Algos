const generateParenthesis = (n) => {
  const solution = [];

  const genCombo = (leftPCount, rightPCount, partial) => {
    if (leftPCount > rightPCount) return;
    if (!leftPCount && !rightPCount) solution.push(partial);
    if (leftPCount > 0) genCombo(leftPCount - 1, rightPCount, partial + '(');
    if (rightPCount > 0) genCombo(leftPCount, rightPCount - 1, partial + ')');
  };
  genCombo(n, n, '')
  return solution
};

console.log(generateParenthesis(3));
console.log(generateParenthesis(1));
console.log(generateParenthesis(10));
