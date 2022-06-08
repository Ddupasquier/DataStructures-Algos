var isPathCrossing = function (path) {
  const s = new Set(['0,0']);
  let x = 0;
  let y = 0;

  for (let i = 0; i < path.length; i++) {
    const dir = path[i];
    if (dir === 'N') {
      y++;
    }
    if (dir === 'S') {
      y--;
    }
    if (dir === 'W') {
      x--;
    }
    if (dir === 'E') {
      x++;
    }

    const key = `${x},${y}`;
    if (s.has(key)) {
      return true;
    }

    s.add(key);
  }

  return false;
};

// var isPathCrossing = function (path) {
//   const points = {};
//   points['0, 0'] = true;

//   let x = 0;
//   let y = 0;
//   let i = 0;

//   while (i < path.length) {
//     if (path[i] == 'N') {
//       y++;
//     }
//     if (path[i] == 'W') {
//       x--;
//     }
//     if (path[i] == 'S') {
//       y--;
//     }
//     if (path[i] == 'E') {
//       x++;
//     }

//     const coordinate = `${x}, ${y}`;

//     if (points[coordinate]) {
//       return true;
//     }

//     points[coordinate] = true;
//     i++;
//   }
//   return false;
// };

console.log(isPathCrossing('NNNNN'));
console.log(isPathCrossing('NES'));
console.log(isPathCrossing('NESWNEENW'));
