import fs from 'fs';
const input = fs.readFileSync('day_5_input.txt', 'utf-8').split('\n');
const numRegex = /\d+/g;

const instructions = input.map((line) =>
  line.split(' ').filter((char) => Number(char.match(numRegex)))
);

/*
[G]                 [D] [R]        
[W]         [V]     [C] [T] [M]    
[L]         [P] [Z] [Q] [F] [V]    
[J]         [S] [D] [J] [M] [T] [V]
[B]     [M] [H] [L] [Z] [J] [B] [S]
[R] [C] [T] [C] [T] [R] [D] [R] [D]
[T] [W] [Z] [T] [P] [B] [B] [H] [P]
[D] [S] [R] [D] [G] [F] [S] [L] [Q]
*/

const storage = [
  'DTRBJLWG',
  'SWC',
  'RZTM',
  'DTCHSPV',
  'GPTLDZ',
  'FBRZJQCD',
  'SBDJMFTR',
  'LHRBTVM',
  'QPDSV',
];

const columns = storage.map((line) => {
  return line.split('');
});

instructions.forEach((instruction) => {
  const removed = columns[instruction[1] - 1].splice(
    columns[instruction[1] - 1].length - instruction[0],
    instruction[0]
  );

  for (let r of removed.reverse()) {
    columns[instruction[2] - 1] = columns[instruction[2] - 1].concat(r);
  }
});


const final = columns.map((column) => column[column.length - 1]).join('');

console.log(final);

// explain this code
// 1. read the input file
// 2. split the input into an array of instructions
// 3. map over the instructions and split them into an array of numbers
// 4. create a 2d array of the storage
// 5. map over the instructions
// 6. remove the number of items from the column specified by the first number in the instruction
// 7. reverse the removed items
// 8. add the removed items to the column specified by the third number in the instruction
// 9. map over the columns and get the last item in each column
// 10. join the columns into a string
// 11. log the final string
