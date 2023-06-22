### Find the Duplicate Number:
```javascript
function findDuplicate(nums) {
  const visited = new Set();
  
  for (let num of nums) {
    if (visited.has(num)) {
      return num;
    } else {
      visited.add(num);
    }
  }
  
  // Return -1 or appropriate value if no duplicate is found
  return -1;
}
```
```javascript
const nums = [1, 3, 4, 2, 2];
const duplicate = findDuplicate(nums);
console.log("Duplicate number:", duplicate);  // Output: 2
```