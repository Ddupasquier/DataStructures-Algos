//* FIRST SOLUTION USING REGEX TO CHECK FOR ALPHANUMERIC CHARACTERS
function charCount(str) {
  let obj = {};
  for (let char of str) {
    c = char.toLowerCase();
    if (/[a-z0-9]/.test(c)) {
      obj[c] = ++obj[c] || 1;
    }
  }
  return obj;
}

//* SECOND SOLUTION: USING CHARACTER CODES AND SOMETIMES BE FASTER THAN USING REGEX
// function charCount(str) {
//   let obj = {};
//   for (let char of str) {
//     if (isAlphanumeric(char)) {
//       const c = char.toLowerCase();
//       obj[c] = ++obj[c] || 1;
//     }
//   }
//   return obj;
// }

// function isAlphanumeric(char) {
//   const code = char.charCodeAt(0);
//   if (
//     !(code > 47 && code < 58) &&
//     !(code > 64 && code < 91) &&
//     !(code > 96 && code < 123)
//   ) {
//     return false;
//   }
//   return true;
// }

console.log(charCount("Yo yo yo mamaaaaaaa!!!"));
