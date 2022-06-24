// function arrayOfArrayProducts(arr) {
//   if (arr.length < 2) return [];
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let product = 1;
//     for (let x = 0; x < arr.length; x++) {
//       if (x !== i) {
//         product = product * arr[x];
//       }
//     }
//     newArr.push(product);
//   }
//   return newArr;
// }

function arrayOfArrayProducts(arr) {
  const n = arr.length;
  if (n < 2) return [];

  let productArr = [];

  let product1 = 1;
  for (let i = 0; i < n; i++) {
    productArr[i] = product1;
    product1 *= arr[i];
  }

  let product2 = 1;
  for (let i = n - 1; i >= 0; i--) {
    productArr[i] *= product2;
    product2 *= arr[i];
  }

  return productArr;
}

console.log(arrayOfArrayProducts([8, 10, 2]));
