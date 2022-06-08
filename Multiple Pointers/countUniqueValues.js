// returns the name of each element which occurs more than once

function countUniqueValues(arr) {
  let obj = {};
  for (i = 0; i < arr.length; i++) {
    let n = arr[i];
    obj[n] ? (obj[n] += 1) : (obj[n] = 1);
  }
  //   console.log(obj);

  let newArr = [];
  for (let k in obj) {
    if (obj[k] > 1) {
      newArr.push(k);
    }
  }
  return newArr;
}

// console.log(countUniqueValues([-4, -3, -2, -1, 1, 2, 3, 4]))
console.log(
  countUniqueValues([-9, -3, -2, 4, -1, 1, 2, 3, 3, 4, 5, 5, 6, 6, 6])
);
// console.log(countUniqueValues([-4, -3, -6, -1, 1, 2, 3, 4, 4, 4, 4]))
