var findLeastNumOfUniqueInts = function (arr, k) {
  let obj = {};
  for (let i of arr) {
    obj[i] = obj[i] + 1 || 1;
  }
  const sortObj = Object.keys(obj).sort((a, b) => obj[a] - obj[b]);
  let i = 0;
  while (k) {
    if (obj[sortObj[i]] > k) return sortObj.length - i;
    k -= obj[sortObj[i]];
    i += 1;
  }
  return sortObj.length - i;
};

console.log(findLeastNumOfUniqueInts([5, 5, 4], 1));
console.log(findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3));
console.log(findLeastNumOfUniqueInts([2, 4, 1, 8, 3, 5, 1, 3], 3));
