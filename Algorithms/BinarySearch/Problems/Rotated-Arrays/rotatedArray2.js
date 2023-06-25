// 81. Search in Rotated Sorted Array II

const rotatedArray2 = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (target === nums[mid]) {
      return true;
    }

    if (nums[left] === nums[mid] && nums[right] === nums[mid]) {
      // Unable to determine which side to discard, reduce both ends
      left++;
      right--;
    } else if (nums[left] <= nums[mid]) {
      // Left side is sorted
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // Right side is sorted
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return false;
};

const numbers = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];
console.log(rotatedArray2(numbers, 13));
