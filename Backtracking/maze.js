const maze = function(r, c) {
  if (r === 1 || c === 1) {
    return 1;
  }

  const left = maze(r - 1, c);
  const right = maze(r, c - 1);

  return left + right;
}

// console.log(maze(3, 3));

// print path
// const path = function(p, r, c) {
//   if (r === 1 && c === 1) {
//     console.log(p);
//     return;
//   }

//   if (r > 1) {
//     path(p + 'D', r - 1, c);
//   }

//   if (c > 1) {
//     path(p + 'R', r, c - 1);
//   }
// }

// path('', 3, 3)

// array
// const path = function(p, r, c) {
//   if (r === 1 && c === 1) {
//     const list = [];
//     list.push(p);
//     return list;
//   }

//   const list = []
//   if (r > 1) {
//     list.push(...path(p + 'D', r - 1, c));
//   }

//   if (c > 1) {
//     list.push(...path(p + 'R', r, c - 1));
//   }

//   return list;
// }

// console.log(path('', 3, 3)); // [ 'DDRR', 'DRDR', 'DRRD', 'RDDR', 'RDRD', 'RRDD' ]

// // go diagonal
// const path = function(p, r, c) {
//   if (r === 1 && c === 1) {
//     const list = [];
//     list.push(p);
//     return list;
//   }

//   const list = []
//   if (r > 1 && c > 1) {
//     list.push(...path(p + 'D', r - 1, c - 1));
//   }

//   if (r > 1) {
//     list.push(...path(p + 'V', r - 1, c));
//   }

//   if (c > 1) {
//     list.push(...path(p + 'H', r, c - 1));
//   }

//   return list;
// }

// console.log(path('', 3, 3)); // [ 'DDRR', 'DRDR', 'DRRD', 'RDDR', 'RDRD', 'RRDD' ]


// const pathRestrictions = function(p, maze, r, c) {
//   if (r === maze.length - 1 && c === maze[0].length - 1) {
//     console.log(p);
//     return;
//   }

//   if (!maze[r][c]) { // maze[r][c] === false
//     return;
//   }

//   if (r < maze.length - 1) {
//     pathRestrictions(p + 'D', maze, r + 1, c);
//   }

//   if (c < maze[0].length - 1) {
//     pathRestrictions(p + 'R', maze, r, c + 1);
//   }
// }

// const board = [
//   [true, true, true],
//   [true, false, true],
//   [true, true, true]
// ];

// pathRestrictions('', board, 0, 0);

// const pathRestrictions = function(p, maze, r, c) {
//   if (r === maze.length - 1 && c === maze[0].length - 1) {
//     const list = [];
//     list.push(p);
//     return list;
//   }

//   const list = [];

//   if (!maze[r][c]) { // maze[r][c] === false
//     return list; // return an empty array for blocked cells
//   }

//   if (r < maze.length - 1) {
//     list.push(...pathRestrictions(p + 'D', maze, r + 1, c));
//   }

//   if (c < maze[0].length - 1) {
//     list.push(...pathRestrictions(p + 'R', maze, r, c + 1));
//   };

//   return list;
// }

// const board = [
//   [true, true, true],
//   [true, false, true],
//   [true, true, true]
// ];

// console.log(pathRestrictions('', board, 0, 0)); // [DDRR, RRDD]

// count
// const pathRestrictions = function(maze, r, c, count) {
//   if (r === maze.length - 1 && c === maze[0].length - 1) {
//     return count + 1;
//   }

//   if (!maze[r][c]) { // maze[r][c] === false
//     return 0; 
//   }

//   if (r < maze.length - 1) {
//     count = pathRestrictions(maze, r + 1, c, count);
//   }

//   if (c < maze[0].length - 1) {
//     count = pathRestrictions(maze, r, c + 1, count);
//   };

//   return count;
// }

// const board = [
//   [true, true, true],
//   [true, false, true],
//   [true, true, true]
// ];

// console.log(pathRestrictions(board, 0, 0, 0)); // 2

// const pathRestrictions = function(maze, r, c, count) {
//   if (r === maze.length - 1 && c === maze[0].length - 1) {
//     return count + 1;
//   }

//   if (!maze[r][c]) { // maze[r][c] === false
//     return 0; 
//   }

//   let totalCount = 0;

//   if (r < maze.length - 1) {
//     totalCount += pathRestrictions(maze, r + 1, c, count);
//   }

//   if (c < maze[0].length - 1) {
//     totalCount += pathRestrictions(maze, r, c + 1, count); // pass count as an argument
//   }

//   return totalCount;
// };

// const board = [
//   [true, true, true],
//   [true, true, true],
//   [true, true, true]
// ];

// console.log(pathRestrictions(board, 0, 0, 0)); // 2


// const pathRestrictionsAllDirection = function(p, maze, r, c) {
//   if (r === maze.length - 1 && c === maze[0].length - 1) {
//     console.log(p);
//     return;
//   }

//   if (!maze[r][c]) { // maze[r][c] === false
//     return;
//   }

//   // i am considering this block in my path
//   maze[r][c] = false;

//   if (r < maze.length - 1) {
//     pathRestrictionsAllDirection(p + 'D', maze, r + 1, c);
//   }

//   if (c < maze[0].length - 1) {
//     pathRestrictionsAllDirection(p + 'R', maze, r, c + 1);
//   }

//   if (r > 0) {
//     pathRestrictionsAllDirection(p + 'U', maze, r - 1, c);
//   }

//   if (c > 0) {
//     pathRestrictionsAllDirection(p + 'L', maze, r, c - 1);
//   }

//   // this line is wher the function will be over
//   // so before the function gets removed, also remove the changes that were made by function
//   maze[r][c] = true;
// }

// const board = [
//   [true, true, true],
//   [true, true, true],
//   [true, true, true]
// ];

// pathRestrictionsAllDirection('', board, 0, 0);


// const pathRestrictionsAllDirection = function(p, maze, r, c, path, step) {
//   if (r === maze.length - 1 && c === maze[0].length - 1) {
//     path[r][c] = step;
//     for (const arr of path) {
//       console.log(arr);
//     }
//     console.log(p);
//     return;
//   }

//   if (!maze[r][c]) { // maze[r][c] === false
//     return;
//   }

//   // i am considering this block in my path
//   maze[r][c] = false;

//   path[r][c] = step;

//   if (r < maze.length - 1) {
//     pathRestrictionsAllDirection(p + 'D', maze, r + 1, c, path, step + 1);
//   }

//   if (c < maze[0].length - 1) {
//     pathRestrictionsAllDirection(p + 'R', maze, r, c + 1, path, step + 1);
//   }

//   if (r > 0) {
//     pathRestrictionsAllDirection(p + 'U', maze, r - 1, c, path, step + 1);
//   }

//   if (c > 0) {
//     pathRestrictionsAllDirection(p + 'L', maze, r, c - 1, path, step + 1);
//   }

//   // this line is wher the function will be over
//   // so before the function gets removed, also remove the changes that were made by function
//   maze[r][c] = true;
//   path[r][c] = 0;
// }

// const board = [
//   [true, true, true],
//   [true, true, true],
//   [true, true, true]
// ];
// int[][] path = new int[board.length][board[0].length];

// pathRestrictionsAllDirection('', board, 0, 0, path, 1);


const pathRestrictionsAllDirection = function(p, maze, r, c, path, step) {
  if (r === maze.length - 1 && c === maze[0].length - 1) {
    path[r][c] = step;
    for (const arr of path) {
      console.log(arr);
    }
    console.log(p);
    console.log(); // new line
    return;
  }

  if (!maze[r][c]) { // maze[r][c] === false
    return;
  }

  // Consider this block in the path
  maze[r][c] = false;

  path[r][c] = step;

  if (r < maze.length - 1) {
    pathRestrictionsAllDirection(p + 'D', maze, r + 1, c, path, step + 1);
  }

  if (c < maze[0].length - 1) {
    pathRestrictionsAllDirection(p + 'R', maze, r, c + 1, path, step + 1);
  }

  if (r > 0) {
    pathRestrictionsAllDirection(p + 'U', maze, r - 1, c, path, step + 1);
  }

  if (c > 0) {
    pathRestrictionsAllDirection(p + 'L', maze, r, c - 1, path, step + 1);
  }

  // Before the function ends, revert the changes made by the function
  maze[r][c] = true;
  path[r][c] = 0;
};

const board = [
  [true, true, true],
  [true, true, true],
  [true, true, true]
];
const path = new Array(board.length).fill(0).map(() => new Array(board[0].length).fill(0));

pathRestrictionsAllDirection('', board, 0, 0, path, 1);


