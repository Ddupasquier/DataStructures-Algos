var thirdMax = function (nums) {
  const sorted = nums.sort((a, b) => a - b);
  let store;
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (sorted[i] !== store) {
      store = sorted[i];
      arr.push(sorted[i]);
    }
  }
  if (arr.length < 3) {
    return arr[arr.length - 1];
  }
  return arr[arr.length - 3];
};

// return 1
console.log(thirdMax([3, 2, 1]));
// return 1
console.log(thirdMax([2, 2, 3, 1]));

/* 
sort array (a - b)
loop over the array 
each iteration cehck that previous value !== current value
if the values are the same, then we will skip that value
if the values are !== store that value
if arr.l < 3 return the last value in the array
else
return arr[arr.length -3]
*/
