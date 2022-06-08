function toCamelCase(str) {
  if (str.length <= 1) {
    return str;
  }
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '-' || str[i] === '_') {
      //       * if value of i is hyphen or underscore
      //       skip that index and uppercase the next
      i++;
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i];
    }
    //     if you don't find a hyphen or underscore
    //     add str[i] to the array and continue loop
  }
  return newStr;
  //   return result
}

console.log(toCamelCase('your-mom-goes-to-college'));
console.log(toCamelCase('Darth_vader-is_bae'));
console.log(toCamelCase('get_out_of_here'));
