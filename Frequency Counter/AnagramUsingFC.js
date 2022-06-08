// Given two strings,
// write a function to determine if the second string is an anagram of the first.
//* THIS CAN BE DONE WITH 2 OBJECTS COUNTING ALL CHARACTERS 
//* IF aOBJ !== bOBJ ? FALSE : TRUE



// MY SOLUTION
// function anagram(a, b) {
//   if (a === b) {
//     return true;
//   }
//   if (a.length !== b.length) {
//     return false;
//   }

//   let fc1 = {};
//   let fc2 = {};

//   for (let v of a) {
//     fc1[v] = (fc1[v] || 0) + 1;
//   }
//   for (let v of b) {
//     fc2[v] = (fc2[v] || 0) + 1;
//   }

//   for (let key in fc1) {
//     if (fc1[key] !== fc2[key] || Object.keys(fc1).length !== Object.keys(fc2).length) {
//       return false;
//     }
//   }
//   return true;
// }

// INSTRUCTOR SOLUTION
function anagram(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < a.length; i++) {
    let letter = a[i];
    // using a ternary to check if index is currently in "lookup" object
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < b.length; i++) {
    let letter = b[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

console.log(anagram('mom', 'mom'));
console.log(anagram('mom', 'moo'));
console.log(anagram('mom', 'mmo'));
console.log(anagram('moo', 'moon'));
