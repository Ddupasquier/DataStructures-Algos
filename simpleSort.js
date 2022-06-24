const sortThisShizz = (arr) => {
  let isSorted = false;
  while (isSorted === false) {
    isSorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      let j = i + 1;
      if (Math.abs(arr[i]) > Math.abs(arr[j])) {
        isSorted = false;
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

console.log(sortThisShizz([6, -3, 3, -6, 8, 9, -1]));
