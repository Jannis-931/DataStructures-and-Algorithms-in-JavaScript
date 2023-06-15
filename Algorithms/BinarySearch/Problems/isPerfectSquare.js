const isPerfectSquare = (num) => {
  let start = 0;
  let end = num;

  while (start <= end) {
    const m = Math.floor((start + end) / 2);
    if (m * m > num) {
      end = m - 1;
    } else if (m * m < num) {
      start = m + 1;
    } else {
      return true;
    }
  }
  return false;
};

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(14));
