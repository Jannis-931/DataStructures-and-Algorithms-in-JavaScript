const findInMountainArray = function(target, mountainArr) {
  //
};

const peakIndexInMountainArray = function(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] > arr[mid + 1]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start;
}


const binarySearch = function(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[target] < arr[mid]) {
      end = mid - 1
    } else if (arr[target] > arr[mid]) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}