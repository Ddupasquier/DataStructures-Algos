function zeros(n) {
  let result = 0;
  while (n = Math.floor(n / 5)) {
    result += n;
  }
  return result
}


console.log(zeros(0));
console.log(zeros(5));
console.log(zeros(1000));
console.log(zeros(30));
