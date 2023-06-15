const mySqrt = (x) => {
  if (x === 0) {
    return 0;
  }

  let start = 0;
  let end = x;
  while (start <= end) {
    const m = Math.floor((start + end) / 2);

    if (m * m < x) {
      start = m + 1;
    } else if (m * m > x) {
      end = m - 1;
    } else {
      return m;
    }
  }
  return end;
};

console.log(mySqrt(12));
