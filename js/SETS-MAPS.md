# Set:
Set is a collection of elements. Set can only contains unique elements.

### Note:
- Remember to create a new Set instance using the new Set() constructor before using these methods.
### add(value): 
- Adds a new element with the specified value to the Set.
```javascript
const set = new Set();
set.add('apple');
set.add('banana');
set.add('orange');

console.log(set); // Set { 'apple', 'banana', 'orange' }
```

### delete(value): 
- Removes the element with the specified value from the Set.
```javascript
const set = new Set(['apple', 'banana', 'orange']);
set.delete('banana');

console.log(set); // Set { 'apple', 'orange' }
```

### has(value): 
- Returns a boolean indicating whether the Set contains an element with the specified value.
```javascript
const set = new Set(['apple', 'banana', 'orange']);
console.log(set.has('banana')); // true
console.log(set.has('grape')); // false
```

### clear(): 
- Removes all elements from the Set.
```javascript
const set = new Set(['apple', 'banana', 'orange']);
set.clear();

console.log(set); // Set {}
```

### size: 
- Returns the number of elements in the Set.
```javascript
const set = new Set(['apple', 'banana', 'orange']);
console.log(set.size); // 3
```

### forEach(callbackFn): 
- Executes a provided function once for each element in the Set, in insertion order.
```javascript
const set = new Set(['apple', 'banana', 'orange']);
set.forEach((value) => {
  console.log(value);
});

// Output:
// apple
// banana
// orange
```

### keys(): 
- Returns an iterator that contains the keys of each element in the Set, in insertion order.
```javascript
const set2 = new Set(['apple', 'mango', 'orange']);
const keys = set2.keys();
console.log(keys); // [Set Iterator] { 'apple', 'mango', 'orange' }

const numSet = new Set([1, 2, 3, 4]);
console.log(numSet.keys()); // [Set Iterator] { 1, 2, 3, 4 }
```

### values(): 
- Returns an iterator that contains the values of each element in the Set, in insertion order.
```javascript
const set3 = new Set(['apple', 'banana', 'orange']);
console.log(set3.values()); // [Set Iterator] { 'apple', 'banana', 'orange' }

const numSet1 = new Set([1, 2, 3, 4]);
console.log(numSet.values()); // [Set Iterator] { 1, 2, 3, 4 }
```

### entries(): 
- Returns an iterator that contains an array of [value, value] for each element in the Set, in insertion order (for compatibility with Map objects).
```javascript
const set4 = new Set(['apple', 'banana', 'orange']);
console.log(set4.entries()); 
/*
[Set Entries] {
    [ 'apple', 'apple' ],
    [ 'banana', 'banana' ],
    [ 'orange', 'orange' ]
  }
*/

const numSet2 = new Set([1, 2, 3, 4]);
console.log(numSet2.entries()); // [Set Entries] { [ 1, 1 ], [ 2, 2 ], [ 3, 3 ], [ 4, 4 ] }
```