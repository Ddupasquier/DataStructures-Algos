// ! DON'T LOOK AT MY WEIRD SOLUTION HAHAHA

// const sortAbsolute = (arr) => {
//   const newArr = arr.map(Math.abs).sort((a, b) => a - b);
//   let negObj = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       const current = arr[i];
//       negObj[current] = (negObj[current] || 0) + 1;
//     }
//   }

//   for (let i = 0; i < newArr.length; i++) {
//     let current = newArr[i];
//     if (negObj[current * -1] !== 0) {
//       newArr[i] = current * -1;
//       negObj[current * -1] = negObj[current * -1] - 1;
//     }
//   }
//   return newArr;
// };


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

console.log(sortAbsolute([6, -3, 3, -6, 8, 9, -1]));
