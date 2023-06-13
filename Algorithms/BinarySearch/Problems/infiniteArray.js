// https://www.geeksforgeeks.org/find-position-element-sorted-array-infinite-numbers/

const infiniteArray = (nums, target) => {
    let start = 0;
    let end = 1;

    while (target > nums[end]) {
        const tmp = end + 1;
        end = end + (end - start + 1)*2;
        start = tmp;
    }

    return binarySearch(nums, target, start, end);
}

const binarySearch = (nums, target, start, end) => {
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

    return -1;
}
   //Index: [0, 1, 2, 3, 4, 5, 6,  7,  8,  9,  10, 11, 12]
const arr = [2, 3, 5, 6, 7, 8, 10, 11, 12, 15, 20, 23, 30];
const target = 8;
const result = infiniteArray(arr, target);
console.log(result);