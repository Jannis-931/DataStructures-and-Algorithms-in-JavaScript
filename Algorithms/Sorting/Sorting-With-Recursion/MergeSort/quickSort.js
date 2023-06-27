const quickSort = function(nums, low, high) {
  if (low >= high) {
    return;
  }

  let start = low;
  let end = high;
  let mid = Math.floor((start + end) / 2);
  let pivot = nums[mid];

  while (start <= end) {
    while (nums[start] < pivot) {
      start++;
    }

    while (nums[end] > pivot) {
      end--;
    }

    if (start <= end) {
      const tmp = nums[start];
      nums[start] = nums[end];
      nums[end] = tmp;
      start++;
      end--;
    }
  }

  // now my pivot is at correct index, please sort two halves now
  quickSort(nums, low, end);
  quickSort(nums, start, high);
};

const nums = [5, 4, 3, 2, 1];
quickSort(nums, 0, nums.length - 1);
console.log(nums);