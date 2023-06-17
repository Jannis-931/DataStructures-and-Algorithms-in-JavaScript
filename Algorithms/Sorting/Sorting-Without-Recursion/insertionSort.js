const insertionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {  // i <= arr.length - 2
    for (let j = i + 1; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let tmp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = tmp;
      } else {
        break;
      }
    }
  }
  return arr;
};

const arr = [6, 7, 2, 9, 1, 0];
console.log(insertionSort(arr));
 