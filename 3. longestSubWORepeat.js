var lengthOfLongestSubstring = function (s) {
  let longest = 0,
    i = 0,
    j = 0;
  let currLong = new Set();
  while (j < s.length) {
    if (currLong.has(s[j])) {
      currLong.delete(s[i++]);
    } else {
      currLong.add(s[j++]);
      longest = Math.max(longest, currLong.size);
    }
  }

  return longest;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
