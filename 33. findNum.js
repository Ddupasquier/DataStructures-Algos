const search = (nums, target) => {
      for (let [index, num] of nums.entries()) {
          if (num === target) return index
      }
      return -1
  };