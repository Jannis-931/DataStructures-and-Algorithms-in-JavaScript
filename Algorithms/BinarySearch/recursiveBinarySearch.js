const recursiveBS = function(arr, target, s, e) {
  if (s > e) {
    return -1;
  }

  const m = Math.floor((s + e) / 2);

  if (arr[m] === target) {
    return m;
  } 

  if (target < arr[m]) {
    return recursiveBS(arr, target, s, m - 1);
  }
  return recursiveBS(arr, target, m + 1, e);
}

const arr = [1, 2, 3, 4, 55, 66, 78];
const target = 69;
const result = recursiveBS(arr, target, 0, arr.length - 1);
console.log(result);
