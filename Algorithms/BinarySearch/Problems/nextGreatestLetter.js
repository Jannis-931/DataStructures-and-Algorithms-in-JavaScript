// https://leetcode.com/problems/find-smallest-letter-greater-than-target/description/
// LeetCode: 744

const nextGreatestLetter = (letters, target) => {
    let start = 0;
    let end = letters.length - 1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (target < letters[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return letters[start % letters.length];
}

const letters = ["c","f","j"];
const target = "c";
const result = nextGreatestLetter(letters, target);
console.log(result);
