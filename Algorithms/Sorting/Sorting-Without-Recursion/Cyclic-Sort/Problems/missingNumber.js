// https://leetcode.com/problems/missing-number/

const missingNumber = (arr) => {
  let i = 0;
  while (i < arr.length) {
    const correct = arr[i];
    if (arr[i] < arr.length && arr[i] !== arr[correct]) {
      let tmp = arr[i];
      arr[i] = arr[correct];
      arr[correct] = tmp;
    } else {
      i++;
    }
  }

  // search for first missing number
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== j) {
      return j;
    }
  }

  // case 2
  return arr.length;
};

const arr = [4, 0, 2, 1];
console.log(missingNumber(arr));

