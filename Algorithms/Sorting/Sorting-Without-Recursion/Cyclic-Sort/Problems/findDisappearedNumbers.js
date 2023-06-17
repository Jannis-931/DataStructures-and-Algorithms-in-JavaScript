const findDisappearedNumbers = (arr) => {
  let i = 0;
  while (i < arr.length) {
    const correct = arr[i] - 1; // adjust the index

    if (arr[i] !== arr[correct]) {
      let tmp = arr[i];
      arr[i] = arr[correct];
      arr[correct] = tmp;
    } else {
      i++;
    }
  }

  // search for missing numbers
  const ans = [];
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== j + 1) {
      ans.push(j + 1);
    }
  }

  return ans;
};

const arr = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(arr));
