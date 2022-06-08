var validWordAbbreviation = function (word, abbr) {
  let check = [];
  let number = [];
  if (!isNaN(word[0])) {
    return false;
  }
  for (let i in abbr) {
    if (isNaN(abbr[i])) {
      check.push(abbr[i]);
      i++;
    } else if (!isNaN(abbr[i])) {
      number.push(abbr[i]);
      i++;
      if (isNaN(abbr[i])) {
        let toNum = Number(number.join(''));
        if (number[0] == 0) {
          toNum++;
        }
        // * LEETCODE POPS RUNTIME ERROR AT '999999999'
        check.push('-'.repeat(toNum));
        number = [];
      }
    }
  }
  console.log(check);
  if (abbr[abbr.length - 1] == 0) {
    check.pop(check[check.length - 1]);
  }
  const joined = check.join('');

  let isAbb = true;
  for (let i in word) {
    if (
      word.length !== joined.length ||
      (word[i] !== joined[i] && joined[i] !== '-')
    ) {
      isAbb = false;
    }
  }
  return isAbb;
};

// true
console.log(validWordAbbreviation('internationalization', 'i12iz4n'));
// false
console.log(validWordAbbreviation('a', '01'));
// false
console.log(validWordAbbreviation('word', '3e'));
// true
console.log(validWordAbbreviation('a', '1'));
// false?
console.log(validWordAbbreviation('word', '2r0'));
