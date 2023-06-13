// // // A peak element is an element that is strictly greater than its neighbors.

// const peakElement = (nums) => {
//     let start = 0;
//     let end = nums.length - 1;

//     while (start <= end) {
//         const mid = Math.floor((start + end) / 2);

//         if (nums[mid] < nums[mid - 1]) {
//             end = mid - 1;
//         } else if (nums[mid] < nums[mid + 1]) {
//             start = mid + 1
//         } else {
//             return mid;
//         }
//     }

//     return -1;
// }

// const nums = [1];
// const result = peakElement(nums);
// console.log(result);
var findPeakElement = function(nums) {
    var start = 0, end = nums.length - 1;
    while (start < end) {
        var mid = Math.floor((start + end) / 2);
        if (mid === 0) {
            return nums[0] >= nums[1] ? 0 : 1;
        }
        if (mid === end) {
            return nums[end - 1] >= nums[end - 2] ? end - 1 : end - 2;
        }

        if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) {
            return mid;
        }
        if (nums[mid] < nums[mid - 1]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return start;
};
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 7]))