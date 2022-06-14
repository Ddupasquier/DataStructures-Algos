const getFolderNames = function (names) {
  const files = {};
  const result = [];

  for (let name of names) {
    if (name in files) {
      let k = files[name] + 1;
      while (`${name}(${k})` in files) {
        k += 1;
      }
      name += `(${k})`;
    }
    files[name] = 0;
    result.push(name);
  }
  return result;
};

console.log(
  getFolderNames([
    'onepiece',
    'onepiece(1)',
    'onepiece(2)',
    'onepiece(3)',
    'onepiece',
  ])
);
