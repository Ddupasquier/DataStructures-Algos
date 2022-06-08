// My Solution
// Simple + inefficient
// function same(a, b) {
//   if (a.length !== b.length) {
//     return false;
//   }
//   for (let i = 0; i < a.length; i++) {
//     let cI = b.indexOf(a[i] ** 2);
//     if (cI === -1) {
//         return false
//     }
//     b.splice(cI, 1)
//   }
//   return true;
// }

// BEST SOLUTION: USING FREQUENCY COUNTER
function same(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  let fC1 = {};
  let fC2 = {};

  //   FOR/OF: "for" initializes loop, "val" corresponds to each element in the array
  //   for each value or "val" add 1 to object || init to 1
  for (let val of a) {
    fC1[val] = (fC1[val] || 0) + 1;
  }
  for (let val of b) {
    fC2[val] = (fC2[val] || 0) + 1;
  }
  //   FOR/IN: for each key in fC1...
  // if key**2 doesn't match a value in fC2, return false
  //   next if
  // ???
  for (let key in fC1) {
    if (!(key ** 2 in fC2)) {
      return false;
    }
    if (fC2[key ** 2] !== fC1[key]) {
      return false;
    }
  }
  // console.log(fC1);
  // console.log(fC2);
  return true;
}

console.log(same([5, 2], [25, 5])); /* false */
console.log(same([5, 10, 4], [16, 25, 100])); /* true */
console.log(same([1, 2, 3, 4], [1, 4, 9, 16])); /* true */
