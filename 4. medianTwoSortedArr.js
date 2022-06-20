function findMedianSortedArrays(nums1, nums2) {
  // * MY SOLUTION WHICH PASSES ALL TEST CASES
  nums1 = [...nums1, ...nums2].sort((a, b) => a - b);
  if (nums1.length % 2 === 0) {
    let i = 0;
    let j = nums1.length - 1;
    let evenMids = [];
    while (i < j) {
      i++;
      j--;
      evenMids = [nums1[i], nums1[j]];
    }
    return (evenMids[0] + evenMids[1]) / 2;
  } else {
    let oddMid = (nums1.length - 1) / 2;
    return nums1[oddMid];
  }
}

// * for some reason this one doesn't work for all test cases?
//   const longest = nums1.length > nums2.length ? nums1 : nums2;
//   let total = 0;
//   let count = 0;
//   for (let i = 0; i < longest.length; i++) {
//     if (nums1[i] && nums1[i] !== 0) {
//       total += nums1[i];
//       count++;
//     }
//     if (nums2[i] && nums2[i] !== 0) {
//       total += nums2[i];
//       count++;
//     }
//   }

//   if (!total) return 0;
//   return total / count;

// * FOUND SOLUTION
//   nums1 = [...nums1, ...nums2].sort((a, b) => a - b);

//   // ! Need to research this operator more
//   // ! Apparently this operator return the midpoint of this array
//   let half = nums1.length >> 1;

//   let sum = 0;
//   if (nums1.length % 2 == 0) {
//     let beforeHalf = half - 1;
//     sum = nums1[beforeHalf] + nums1[half];
//     sum /= 2;
//   } else {
//     sum = nums1[half];
//   }
//   return sum.toFixed(5);

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([1, 3], [2, 7]));
