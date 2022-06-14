// A Narcissistic Number is a number of length l in which the sum of its digits
// to the power of l is equal to the original number. If this seems confusing,
// refer to the example below.

// Ex: 153, where l = 3 ( the number of digits in 153 )
// 1**3 + 5**3 + 3**3 = 153

// Write a function that, given n, returns whether or not n is a Narcissistic Number.
// 153
// "1", "5", "3"
// 1, 5, 3

function isNarcissistic(n) {
  const arrOfN = n
    .toString()
    .split('')
    .map((n) => {
      return Number(n);
    });
  const l = arrOfN.length;
  let i = 0;
  let product = 0;
  while (i < l) {
    product += arrOfN[i] ** l;
    i++;
  }
  if (product === n) {
    return true;
  } else {
    return false;
  }
}

// * true
console.log(isNarcissistic(153));
// * true
console.log(isNarcissistic(1));
// * false
console.log(isNarcissistic(435));
// * false
console.log(isNarcissistic(324));
