const binarySearch = (nums, target) => {
    if (nums.length === 0) return -1;

    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            return mid;
        }
    }

    return -1;
}


const nums = [-25, 0, 2, 4, 12, 15, 23, 70];
const target = -25;
const result = binarySearch(nums, target);
console.log(result);