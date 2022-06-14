var mergeTwoArrays = (l1, l2) => {
  let newArray = [];
  for (let i in l1) {
    newArray.splice(0, 0, l1[i]);
    newArray.splice(0, 0, l2[i]);
  }
  return newArray.sort();
};

console.log(mergeTwoArrays([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]));
