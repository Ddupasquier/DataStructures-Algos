const arr = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
];

function spiralTraverse(arr) {
  let fullArr = [];

  let startCol = 0;
  let endCol = arr[0].length - 1;
  let startRow = 0;
  let endRow = arr.length - 1;
  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
      fullArr.push(arr[startRow][i]);
    }
    for (let i = startRow + 1; i <= endRow; i++) {
      fullArr.push(arr[i][endCol]);
    }
    for (let i = endCol - 1; i >= startCol; i--) {
      if (startRow === endRow) break
      fullArr.push(arr[endRow][i])
    }
    for (let i = endRow -1; i > startRow; i--) {
      if (startCol === endCol) break
      fullArr.push(arr[i][startCol])
    }
    startRow++
    endRow--
    startCol++
    endCol--
  }
  return fullArr;
}

console.log(spiralTraverse(arr));
