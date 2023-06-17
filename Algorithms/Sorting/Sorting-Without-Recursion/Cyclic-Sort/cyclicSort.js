const cyclicSort = (arr) => {
  let i = 0;
  while (i < arr.length) {
    const correct = arr[i] - 1;

    if (arr[i] !== arr[correct]) {
      let tmp = arr[i];
      arr[i] = arr[correct];
      arr[correct] = tmp;
    } else {
      i++;
    }
  }
  return arr;
};


const arr = [3, 5, 2, 1, 4];
console.log(cyclicSort(arr));
