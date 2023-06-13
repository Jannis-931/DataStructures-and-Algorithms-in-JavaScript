const findFirstAndLastPosition = (nums, target) => {
    const left = binarySearch(nums, target, true);
    const right = binarySearch(nums, target, false);
    return [left, right];
};

// isLeftBias[true/false], if false res is rightBiased
const binarySearch = (nums, target, isLeftBias) => {
    let left = 0;
    let right = nums.length - 1;
    let i = -1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (target < nums[mid]) {
            right = mid - 1;
        } else if (target > nums[mid]) {
            left = mid + 1;
        } else {
            i = mid;
            if (isLeftBias) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    return i;
};

const nums = [5, 7, 7, 7, 7, 8, 8, 10];
const target = 7;
const result = findFirstAndLastPosition(nums, target);
console.log(result);
