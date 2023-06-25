// const printPattern = function (n) {
//   for (let row = 1; row <= 2*n; row++) {
//     // for every row, run the col
//     let pattern = '';
//     const totalColsInRow = row > n ? 2 * n - row : row;
//     for (let col = 1; col <= totalColsInRow; col++) {
//       pattern += '*';
//     }
//     console.log(pattern);
//   }
// };

// printPattern(5);

const printPattern = function (n) {
  for (let row = 0; row < 2*n; row++) {
    // for every row, run the col
    let pattern = '';
    const totalColsInRow = row > n ? 2 * n - row : row;
    for (let col = 0; col < totalColsInRow; col++) {
      pattern += '*';
    }
    console.log(pattern);
  }
};

printPattern(5);

/*
    *****
    ****
    ***
    **
    *
*/