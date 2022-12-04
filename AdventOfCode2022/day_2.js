import fs from 'fs';
const input = fs.readFileSync('day_2_input.txt', 'utf-8').split(`\n`);

let rounds = [];
for (let round of input) {
  rounds.push(round.split(' '));
}

const library = {
  A: {
    X: 'C',
    Y: 'A',
    Z: 'B',
  },
  B: {
    X: 'A',
    Y: 'B',
    Z: 'C',
  },
  C: {
    X: 'B',
    Y: 'C',
    Z: 'A',
  },
};

let score = 0;

const addShapeScore = (shape) => {
  if (shape === 'A') {
    score += 1;
  } else if (shape === 'B') {
    score += 2;
  } else if (shape === 'C') {
    score += 3;
  }
};

for (let round of rounds) {
  const player1 = round[0];
  const player2 = round[1];

  if (player2 === 'X') {
    score += 0;
    addShapeScore(library[player1][player2]);
  } else if (player2 === 'Y') {
    score += 3;
    addShapeScore(library[player1][player2]);
  } else {
    score += 6;
    addShapeScore(library[player1][player2]);
  }
}

console.log(score);

// 1. read the input file
// 2. split the input file into an array
// 3. create a variable to hold the rounds
// 4. loop through the input array
// 5. split the current index into an array
// 6. push the current index into the rounds array
// 7. create a library object
// 8. create a variable to hold the score
// 9. create a function to add the shape score
// 10. if the shape is A
// 11. add 1 to the score
// 12. if the shape is B
// 13. add 2 to the score
// 14. if the shape is C
// 15. add 3 to the score
// 16. loop through the rounds array
// 17. create a variable to hold the first player
// 18. create a variable to hold the second player
// 19. if the second player is X
// 20. add 0 to the score
// 21. add the shape score
// 22. if the second player is Y
// 23. add 3 to the score
// 24. add the shape score
// 25. if the second player is Z
// 26. add 6 to the score
// 27. add the shape score
// 28. log the score