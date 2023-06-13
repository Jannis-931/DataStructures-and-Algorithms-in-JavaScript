const mountainArray = (nums) => {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (nums[mid] < nums[mid - 1]) {
            end = mid - 1;
        } else if (nums[mid] < nums[mid + 1]) {
            start = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
}

const arr = [3, 4, 5, 1];
const result = mountainArray(arr);
console.log(result)