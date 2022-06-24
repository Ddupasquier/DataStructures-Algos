/*

A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

*/

function solution(list) {
  list.sort((a, b) => a - b);
  let i = 0;
  let j = 1;
  let count = 1
  let newList = [];
  while (j < list.length) {
    const current = list[i];
    //     if i + 1 is not equal to j then we'll push both elements to the array
    if (current + count !== list[j]) {
      if (j - i >= 2) {
        newList.push(current + '-' + list[j]);
        i = j + 1;
        j = i + 1;
      } else {
        newList.push(current);
        i++;
        j = i + 1;
      }
    } else {
      j++;
      // insert a while loop so we can keep incrementing j if range is more than 3
    }
  }
  return newList.join('');
}

console.log(
  solution([
    -10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18,
    19, 20,
  ])
);
//   // TODO: complete solution
//   //list is an array of integers
//   let start,
//     end,
//     answer = [],
//     last;
//   list.sort((a, b) => a - b);
//   list.forEach((element, index) => {
//     if (index === 0) {
//       //if it's the start
//       start = element;
//       end = element;
//       //if it's the end of the range
//     } else if (index === list.length - 1) {
//       if (end + 1 === element) end = element;
//       else {
//         last = element;
//       }
//       if (start === end) answer.push(start);
//       else if (start === end - 1) {
//         answer.push(start);
//         answer.push(end);
//       } else {
//         answer.push(start + '-' + end);
//       }
//       if (last != null) answer.push(last);
//     } else if (end + 1 !== element) {
//       if (start === end) answer.push(start);
//       else if (start === end - 1) {
//         answer.push(start);
//         answer.push(end);
//       } else {
//         answer.push(start + '-' + end);
//       }

//       start = element;
//       end = element;
//     } else {
//       end = element;
//     }
//   });

//   return answer.join(',');

// "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
