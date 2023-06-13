const insertPosition = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (target < nums[mid]) {
            end = mid - 1;
        } else if (target > nums[mid]) {
            start = mid + 1;
        } else {
            return mid;
        }
    }
    return start;
}

// const nums1 = [1, 3, 5, 6];
// const target1 = 5;
// const result1 = insertPosition(nums1, target1);
// console.log(result1);  // 2

const nums2 = [1, 3, 5, 6];
const target2 = 7;
const result2 = insertPosition(nums2, target2);
console.log(result2); // 1