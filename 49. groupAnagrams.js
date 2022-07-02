const groupAnagrams = (strs) => {
  const hashMap = {};
  for (let str of strs) {
    const sortedElem = str.split('').sort().join('');
    if (hashMap[sortedElem]) {
      hashMap[sortedElem].push(str); // update existing anagrams arrays
    } else {
      hashMap[sortedElem] = [str]; // create a new array of anagrams
    }
  }

  return Object.values(hashMap); // return array of arrays with anagrams
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
// [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
