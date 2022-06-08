function findOutlier(ints) {
  let oddObj = [];
  let evenObj = [];
  let i = 0;
  while (i < ints.length) {
    if (ints[i] % 2 == 0) {
      evenObj.push(ints[i]);
      i++;
    } else {
      oddObj.push(ints[i]);
      i++;
    }
  }

  if (evenObj.length > oddObj.length) {
    return oddObj[0];
  } else {
    return evenObj[0];
  }
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
console.log(findOutlier([2, 6, 8, 10, 3]));
console.log(findOutlier([0, 0, 3, 0, 0]));
