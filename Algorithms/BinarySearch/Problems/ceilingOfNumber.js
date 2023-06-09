// console.log(Math.ceil(3.14)); // Output: 4

const ceilingOfNumber = (nums, target) => {
    if (nums.length === 0) return 0;

    // but what is the target is greater than the greatest number in the array
    if (target > nums[nums.length - 1]) return -1;

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

    return nums[start];
}

const numbers = [2, 3, 5, 9, 14, 17, 18];
const target = 19;
const result = ceilingOfNumber(numbers, target);
console.log(result);