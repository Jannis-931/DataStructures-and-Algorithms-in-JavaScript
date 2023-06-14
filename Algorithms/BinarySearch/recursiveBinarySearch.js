const recursiveBS = (arr, target, start, end) => {
  if (start > end) {
    return -1; // Target element not found
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid; // Target element found
  } else if (arr[mid] < target) {
    return recursiveBS(arr, target, mid + 1, end); // Search in the right half
  } else {
    return recursiveBS(arr, target, start, mid - 1); // Search in the left half
  }
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 9;
const result = recursiveBS(arr, target, 0, arr.length - 1);
if (result !== -1) {
  console.log('Element found at index:', result);
} else {
  console.log('Element not found.');
}
