var searchRange = function (nums, target) {
      let arr = [];
      if (!nums.includes(target)) {
        return [-1, -1];
      }
      if (nums.length === 1 && nums[0] === target) {
        return [0, 0];
      }
      let i = 0;
      let j = nums.length - 1;
      while (arr.length < 2) {
        console.log(arr);
        if (i < j) {
          if (nums[i] === target) {
            arr.push(Number(i));
            i++;
          } else {
            i++;
          }
        }
        if (arr.length > 0) {
          if (nums[j] === target) {
            arr.push(Number(j));
            j--;
          } else {
            j--;
          }
        }
      }
      return arr;
    };
    
    console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
    