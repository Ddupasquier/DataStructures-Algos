function consecutive(arr, a, b) {
  const i = arr.indexOf(a);
  return arr[i + 1] === b || arr[i - 1] === b ? true : false;
}

console.log(consecutive([1, 6, 9, -3, 4, -78, 0]));
