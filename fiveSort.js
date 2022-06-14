const fiveSort = (arr) => {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[j] === 5) {
      j--;
    } else {
      if (arr[i] === 5) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
        j--;
      }
      i++;
    }
  }
  return arr;
};

console.log(fiveSort([5, 5, 5, 1, 1, 1, 4]));
