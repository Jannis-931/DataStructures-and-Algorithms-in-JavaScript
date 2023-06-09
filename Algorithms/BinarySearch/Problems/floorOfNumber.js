// console.log(Math.floor(3.14)); // Output: 3

const floorOfNumber = (nums, target) => {
    if (nums.length === 0) return 0;
    if (target < nums[0]) return -1;

    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (target > nums[mid]) {
            start = mid + 1;
        } else if (target < nums[mid]) {
            end = mid - 1;
        } else {
            return nums[mid];
        }
    }

    return nums[end];
}

const numbers = [2, 3, 5, 9, 14, 17, 18];
const target = -2;
const result = floorOfNumber(numbers, target);
console.log(result);