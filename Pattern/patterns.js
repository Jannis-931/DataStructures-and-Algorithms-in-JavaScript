const printPattern = function (n) {
  for (let row = 1; row <= n; row++) {
    // for every row, run the col
    let pattern = '';
    for (let col = row; col <= n; col++) {
      pattern += '*';
    }
    console.log(pattern);
  }
};

printPattern(4);

/*
    *****
    ****
    ***
    **
    *
*/