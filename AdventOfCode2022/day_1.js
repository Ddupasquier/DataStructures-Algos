import fs from 'fs';
const input = fs.readFileSync('day_1_input.txt', 'utf-8').split(`\n`);

let elfCount = 0;
let elfCalories = [0];
let currentElfCount = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] == '') {
    elfCount++;
    elfCalories[elfCount] = 0;
    currentElfCount = 0;
    continue;
  }

  elfCalories[elfCount] += parseInt(input[i]);
}

console.log('max number', Math.max(...elfCalories));

const sortedElves = elfCalories.sort((a, b) => b - a)

console.log('total of first 3', sortedElves.slice(0, 3).reduce((a, b) => a + b, 0))

// 1. read the input file
// 2. split the input file into an array
// 3. create a variable to hold the number of elves
// 4. create a variable to hold the condenced input
// 5. create a variable to hold the current elf count
// 6. loop through the input array
// 7. if the current index is a blank entry
// 8. increment the elf count
// 9. add a new entry to the condenced input array
// 10. reset the current elf count
// 11. continue to the next index
// 12. add the current index to the current elf count
// 13. log the max number of calories
// 14. sort the condenced input array
// 15. log the total of the first 3 elves
