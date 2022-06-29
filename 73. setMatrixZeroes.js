const setZeroes = (matrix) => {
  const zeroes = new Set();
  for (const x in matrix) {
    for (const y in matrix[x]) {
      if (matrix[x][y] === 0) {
        zeroes.add([x, y]);
        console.log(zeroes)
      }
    }
  }

  zeroes.forEach(([x, y]) => {
    for (const i in matrix[0]) {
      if (matrix[x][i] !== 0) {
        matrix[x][i] = 0;
      }
    }
    for (const j in matrix) {
      if (matrix[j][y] !== 0) {
        matrix[j][y] = 0;
      }
    }
  });

  return matrix;
};

console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);

console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);

console.log(setZeroes([[0, 1]]));
