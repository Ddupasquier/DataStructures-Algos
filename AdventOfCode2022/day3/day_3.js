import fs from 'fs';
const input = fs.readFileSync('day_3_input.txt', 'utf-8').split('\n');

let score = 0;

const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const letterToNumber = (letter) => {
  score += alphabet.indexOf(letter) + 1;
};

let i = 0;
let j = 1;
let k = 2;

while (k < input.length) {
  const first = input[i];
  const second = input[j];
  const third = input[k];

  const firstSet = new Set();
  const secondSet = new Set();
  const thirdSet = new Set();

  for (let letter of first) {
    firstSet.add(letter);
  }

  for (let letter of second) {
    secondSet.add(letter);
  }

  for (let letter of third) {
    thirdSet.add(letter);
  }

  i += 3;
  j += 3;
  k += 3;

  const common = new Set(
    [...firstSet].filter((x) => secondSet.has(x) && thirdSet.has(x))
  );

  letterToNumber([...common][0]);
}

console.log(score);
