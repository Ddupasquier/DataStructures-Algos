var average = function (salary) {
  const sort = salary.sort((a, b) => a - b);
  let i = 1;
  let total = 0;
  while (i < salary.length - 1) {
    total += sort[i];
    i++;
  }
  return total / (sort.length - 2);
};

console.log(average([4000, 3000, 1000, 2000]));
