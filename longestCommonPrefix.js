var longestCommonPrefix = function (strs) {
  if (!strs[0] || strs.length === 0) return strs[0] || '';
  let i = 0;
  // while all strs have the same character at position i, increment i
  while (strs[0][i] && strs.every((s) => s[i] === strs[0][i])) i++;

  // prefix is the substring from the beginning to the last successfully checked i
  return strs[0].substr(0, i);
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
