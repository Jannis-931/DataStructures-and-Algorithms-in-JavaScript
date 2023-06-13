const rotatedSortedArray = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (target < nums[mid]) {
            if (target)
        }
    }

    return -1;
}

const arr = [4, 5, 6, 7, 0, 1, 2];
const target = 0;
const result = rotatedSortedArray(arr, target);
console.log(result);