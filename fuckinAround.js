var searchInsert = function(nums, target) {
  const copy = [...nums, target].sort((a, b) => a - b)
  const iCopy = copy.indexOf(target)
  
  const iNums = nums.indexOf(target)
  if (iNums > 0) {
    return iNums
  }
  else return iCopy
};

console.log(searchInsert([1,3,5,6], 5))