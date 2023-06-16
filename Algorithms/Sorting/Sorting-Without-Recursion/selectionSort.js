const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // find the max item in the remaining array and swap with correct index
    const last = arr.length - i - 1;
    const maxIndex = getMaxIndex(arr, 0, last);

    let tmp = arr[last];
    arr[last] = arr[maxIndex];
    arr[maxIndex] = tmp;
  }
  return arr;
}

const getMaxIndex = (arr, start, end) => {
  let max = start;
  for (let i = start; i <= end; i++) {
    if (arr[i] > arr[max]) { // Compare with arr[max] instead of max
      max = i;
    }
  }
  return max;
}

const arr = [10, 8, -10, 4, 100];
console.log(selectionSort(arr));
