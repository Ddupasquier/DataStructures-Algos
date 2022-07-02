const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  let sObj = {};

  for (const char of s) {
    sObj[char] = (sObj[char] || 0) + 1;
  }

  for (const char of t) {
    if (!sObj[char]) return false;
    if (sObj[char]) {
      sObj[char] = sObj[char] - 1;
    }
  }
  return true;
};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
