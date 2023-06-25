const findMinimum = function(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return nums[left];
};

const numbers = [3, 4, 5, 1, 2];
console.log(findMinimum(numbers)); // 1