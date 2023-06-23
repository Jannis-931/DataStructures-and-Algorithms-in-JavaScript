const sortedArray = function (arr) {
  return helper(arr, 0);
};

const helper = function (arr, index) {
  if (index === arr.length - 1) {
    return true;
  }

  return arr[index] < arr[index + 1] && helper(arr, index + 1);
};


const numbers = [1, 2, 3, 5, 6, 8];
console.log(sortedArray(numbers)); // true