function firstNonRepeatingLetter(s) {
  if (s === undefined) return '';

  let obj = {};
  for (let char of s) {
    obj[char] = (obj[char] || 0) + 1;
  }

  for (let key in obj) {
    if (obj[key] > 1) {
      delete obj[key];
    }
  }

  if (Object.keys(obj).length < 1) return ''
  const toArr = Object.keys(obj);
  return toArr[0];
}

console.log(firstNonRepeatingLetter('stress'));
console.log(firstNonRepeatingLetter('sTress'));
console.log(firstNonRepeatingLetter('aaaaaaa'));
console.log(firstNonRepeatingLetter('moonmen'));

