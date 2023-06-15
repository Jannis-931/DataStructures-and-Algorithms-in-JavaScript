const findDuplicate = function (nums) {
    const visited = new Set();

    for (let num of nums) {
        if (visited.has(num)) {
            return num;
        } else {
            visited.add(num);
        }
    };
    return -1;
}

const arr = [3,1,3,4,2];
console.log(findDuplicate(arr));