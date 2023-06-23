# Recursion In Arrays:
- If main function is return type then all other recursive call also return type.
```javascript
const findArrayAllIndex = function (arr, target) {
  return helperIndex(arr, target, 0, []);
};

const helperIndex = function(arr, target, index, result) {
  if (index === arr.length) {
    return result;
  }

  if (arr[index] === target) {
    result.push(index);
  }
  return helperIndex(arr, target, index + 1, result);
  
};

const numbers = [2, 3, 1, 4, 4, 5];
const target = 4;
console.log(findArrayAllIndex(numbers, target)); // [3, 4]
```