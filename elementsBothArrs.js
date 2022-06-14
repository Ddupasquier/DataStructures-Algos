/* 
Write a function, intersection, that takes in two arrays, a,b, as arguments. 
The function should return a new array containing elements that are in both of the two arrays. 
*/

// ! NAIVE SOLUTION
// const intersection = (a, b) => {
//   let arr = [];
//   for (let i = 0; i < a.length; i++) {
//     if (b.includes(a[i])) {
//       arr.push(a[i]);
//     }
//   }
//   return arr;
// };

// * USING A SET IS 0(1)
const intersection = (a, b) => {
  let set = new Set(a);
  let arr = [];
  for (let i = 0; i < b.length; i++) {
    if (set.has(b[i])) {
      arr.push(b[i]);
    }
  }
  return arr;
};

console.log(intersection([4, 2, 1, 6], [3, 6, 9, 2, 10]));
console.log(intersection([0, 1, 2], [10, 11]));
