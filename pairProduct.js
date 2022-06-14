/* Write a function, pairProduct, that takes in an array and a target product as arguments. 
The function should return an array containing a pair of indices whose elements multiply to the 
given target. The indices returned must be unique.*/

const pairProduct = (nums, t) => {
  let prev = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let comp = t / num;
    if (comp in prev) {
      return [i, prev[comp]];
    }
    prev[num] = i;
  }
};

//  [3, 1]
console.log(pairProduct([3, 2, 5, 4, 1], 8));
