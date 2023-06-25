const bubbleSort = function(arr, r, c) {
  if (r === 0) {
    return arr;
  }

  if (c < r) {
    if (arr[c] > arr[c+1]) {
      let tmp = arr[c];
      arr[c] = arr[c+1];
      arr[c+1] = tmp;
    }
    bubbleSort(arr, r, c+1);
  } else {
    bubbleSort(arr, r - 1, 0);
  }
  
  return arr; // Return the sorted array
};

const arr = [4, 5, 2, 3, 9, 1];
console.log(bubbleSort(arr, arr.length - 1, 0));

