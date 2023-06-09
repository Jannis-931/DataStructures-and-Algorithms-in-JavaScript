const oaBinarySearch = (nums, target) => {
    if (nums.length === 0) return -1;

    let start = 0;
    let end = nums.length - 1;
    const isAsc = nums[start] < nums[end];

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) return mid;

        if (isAsc) {
            if (nums[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        } else {
            if (nums[mid] < target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
    }

    return -1;
}

// const nums = [2, 4, 5, 12, 15, 23, 40];
const nums = [30, 20, 19, 10, 7, 4, 1]
const target = 1;
const result = oaBinarySearch(nums, target);
console.log(result);