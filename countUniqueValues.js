const countUniqueValues = (arr) => {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

console.log(countUniqueValues([1, 1, 2, 3, 3, 4, 5, 6, 6, 7]));
console.log(countUniqueValues([1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 5, 6, 6, 7, 43, 55, 34, 3, 56, 56, 56, 78, 1011111]));

