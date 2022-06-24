const isValid = function (s) {
  const stack = [];

  const hash = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (const p of s) {
    if (p in hash) {
      if (stack[stack.length - 1] !== hash[p]) {
        return false;
      } else {
        stack.pop();
      }
    } else {
      stack.push(p);
    }
  }

  return stack.length === 0;
};
