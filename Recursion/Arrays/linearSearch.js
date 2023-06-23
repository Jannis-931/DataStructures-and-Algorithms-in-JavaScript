// const findArray = function (arr, target) {
//   return helper(arr, target, 0);
// };

// const helper = function(arr, target, index) {
//   if (index === arr.length) {
//     return false;
//   }

//   return arr[index] === target || helper(arr, target, index + 1);
// };

// index
const findArrayIndex = function (arr, target) {
  return helperIndex(arr, target, 0);
};

const helperIndex = function(arr, target, index) {
  if (index === arr.length) {
    return -1;
  }

  if (arr[index] == target) {
    return index;
  } else {
    return helperIndex(arr, target, index + 1);
  }
};

const numbers = [3, 2, 1, 18, 9];
const target = 10;
console.log(findArrayIndex(numbers, target)); // true
  



// find element end->start
// const findArrayReverse = function (arr, target) {
//   return helper1(arr, target, arr.length - 1);
// };

// const helper1 = function(arr, target, index) {
//   if (index === -1) {
//     return false;
//   }

//   return arr[index] === target || helper1(arr, target, index - 1);
// };

// const numbers1 = [3, 2, 1, 18, 9];
// const target1 = 180;
// console.log(findArrayReverse(numbers1, target1)); // false


