function alphanumeric(string) {
  const allowed = new Set('1234567890abcdefghijklmnopqrstuvwxyz');
  if (string.length < 1) {
    return false;
  }
  for (let i = 0; i < string.length; i++) {
    if (!allowed.has(string[i].toLowerCase())) {
      return false;
    }
  }
  return true;
}

console.log(alphanumeric('Mazinkaiser'));
console.log(alphanumeric('hello world_'));
console.log(alphanumeric('PassW0rd'));
console.log(alphanumeric('     '));
console.log(alphanumeric(''));
