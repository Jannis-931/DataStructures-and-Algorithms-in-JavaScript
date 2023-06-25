const mergeSort = function (arr) {
  if (arr.length === 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

const merge = function (first, second) {
  const mix = new Array(first.length + second.length);

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < first.length && j < second.length) {
    if (first[i] < second[j]) {
      mix[k] = first[i];
      i++;
    } else {
      mix[k] = second[j];
      j++;
    }
    k++;
  }

  // Copy the remaining elements from the first array (if any)
  while (i < first.length) {
    mix[k] = first[i];
    i++;
    k++;
  }

  // Copy the remaining elements from the second array (if any)
  while (j < second.length) {
    mix[k] = second[j];
    j++;
    k++;
  }

  return mix;
};

const arr = [5, 4, 3, 2, 1];
console.log(mergeSort(arr)); // [1, 2, 3, 4, 5]
console.log(arr)
