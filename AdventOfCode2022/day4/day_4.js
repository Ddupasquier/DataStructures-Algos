import fs from 'fs';
const input = fs.readFileSync('day_4_input.txt', 'utf-8').split('\n');
const split = input.map((line) => line.split(','));

let count = 0;

const range = (start, end) => {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
};

for (let i = 0; i < split.length; i++) {
  const first = split[i][0].split('-');
  const second = split[i][1].split('-');

  const firstLow = Number(first[0]);
  const firstHigh = Number(first[1]);
  const secondLow = Number(second[0]);
  const secondHigh = Number(second[1]);

  const firstRange = range(firstLow, firstHigh);
  const secondRange = range(secondLow, secondHigh);

  const intersection = firstRange.filter((x) => secondRange.includes(x));

  if (intersection.length > 0) {
    count++;
  }
}

console.log(count);
