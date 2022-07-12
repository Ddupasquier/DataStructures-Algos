var topKFrequent = function (nums, k) {
  let hash = {};
  let result = [];
  for (const num of nums) hash[num] = (hash[num] || 0) + 1;
  const mapped = Object.entries(hash).sort((a, b) => a[1] - b[1]);
  console.log(hash, mapped)

  while (result.length < k) {
    let largest = mapped.pop();
    result.push(Number(largest[0]));
  }

  return result;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
