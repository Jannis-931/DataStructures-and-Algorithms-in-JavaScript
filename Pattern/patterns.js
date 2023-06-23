const printPattern = function (n) {
  for (let row = 1; row <= n; row++) {
    // for every row, run the col
    let pattern = '';
    for (let col = 1; col <= row; col++) {
      pattern += '*';
    }
    console.log(pattern);
  }
};

printPattern(5);
