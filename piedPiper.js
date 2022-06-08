// Story
// The Pied Piper has been enlisted to play his magical tune and coax all the rats
// out of town.

// But some of the rats are deaf and are going the wrong way!

// Kata Task
// How many deaf rats are there?

// Legend
// P = The Pied Piper
// O~ = Rat going left
// ~O = Rat going right
// Example
// ex1 ~O~O~O~O P has 0 deaf rats

// ex2 P O~ O~ ~O O~ has 1 deaf rat

// ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats



var countDeafRats = function (town) {
  const newStr = town.split(' ').join('').split('P');
  return count(newStr[0], 'left') + count(newStr[1], 'right');
};

var count = function (str, dir) {
  const rats = {
    'O~': 0,
    '~O': 0,
  };
  if (str.length === 0) {
    return 0;
  }
  let i = 0;
  while (i < str.length) {
    const rat = str[i] + str[i + 1];
    rats[rat] += 1;
    i += 2;
  }
  if (dir === 'left') {
    return rats['O~'];
  }
  return rats['~O'];
};

console.log(countDeafRats('~O~O~O~O P'));
console.log(countDeafRats('P O~ O~ ~O O~'));
console.log(countDeafRats('~O~O~O~OP~O~OO~'));
