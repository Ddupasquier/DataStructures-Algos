var numberOfArithmeticSlices = function(nums) {
      let count = 0, diff, ans = 0
      for (let i = 1; i < nums.length; i++) {
          let newDiff = nums[i] - nums[i-1]
          if (newDiff === diff) ans += count++
          else diff = newDiff, count = 1
      }
      return ans
  };

//   var numberOfArithmeticSlices = function(nums) {
//       let count = 0, store, ans = 0
//       for (let i = 1; i < nums.length; i++) {
//             let diff = nums[i - 1] - nums[i]
//             if (diff === store) {
//                   ans += count++
//             } else {
//                   store === diff, count = 1
//             }
//       }
//       return count
//   };

  console.log(numberOfArithmeticSlices([1,3,5,7,9]))
  console.log(numberOfArithmeticSlices([1,2,3,4]))