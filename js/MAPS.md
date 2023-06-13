# Maps: (key, value)
- Map not allow same (key, value) pare.
- if 'key' is same 'value' should be different or 
- if 'value' is same but 'key' is different

### Note:
- Remember to create a new Map instance using the new Map() constructor before using these methods.

### set(key, value): 
- Adds or updates an element in the Map with the specified key-value pair.
```javascript
const map = new Map();
map.set('apple', 10);
map.set('mango', 20);
map.set('orange', 30);
map.set('orange', 30);

console.log(map); // Map(3) { 'apple' => 10, 'mango' => 20, 'orange' => 30 }
```

### get(key): 
- Returns the value associated with the specified key in the Map.
```javascript
const map = new Map();
map.set('apple', 10);
map.set('banana', 5);
map.set('orange', 8);

console.log(map.get('banana')); // 5
console.log(map.get('grape')); // undefined
```

### has(key): 
- Returns a boolean indicating whether the Map contains an element with the specified key.
```javascript
const map = new Map();
map.set('apple', 10);
map.set('banana', 5);
map.set('orange', 8);

console.log(map.has('banana')); // true
console.log(map.has('grape')); // false
```

### delete(key): 
- Removes the element with the specified key from the Map.
```javascript
const map = new Map();
map.set('apple', 10);
map.set('banana', 5);
map.set('orange', 8);

map.delete('banana');

console.log(map); // Map { 'apple' => 10, 'orange' => 8 }
```

### clear(): 
- Removes all elements from the Map.
```javascript
const map = new Map();
map.set('apple', 10);
map.set('banana', 5);
map.set('orange', 8);

map.clear();

console.log(map); // Map {}
```

### size:
- Returns the number of elements in the Map.
```javascript
const map = new Map();
map.set('apple', 10);
map.set('banana', 5);
map.set('orange', 8);

console.log(map.size); // 3
```

### forEach(callbackFn): 
- Executes a provided function once for each key-value pair in the Map, in insertion order.
```javascript
const map = new Map();
map.set('apple', 10);
map.set('banana', 5);
map.set('orange', 8);

map.forEach((value, key) => {
  console.log(key, value);
});

// Output:
// apple 10
// banana 5
// orange 8
```

### keys(): 
- Returns an iterator that contains the keys of each element in the Map, in insertion order.
```javascript
const map = new Map();
map.set('apple', 10);
map.set('banana', 5);
map.set('orange', 8);

const iterator = map.keys();
console.log(iterator); // [Map Iterator] { 'apple', 'banana', 'orange' }
```

### values(): 
- Returns an iterator that contains the values of each element in the Map, in insertion order.
```javascript
const map = new Map();
map.set('apple', 10);
map.set('banana', 5);
map.set('orange', 8);

const iterator = map.values();

console.log(iterator); // [Map Iterator] { 10, 5, 8 }
```

### entries(): 
- Returns an iterator that contains an array of [key, value] for each element in the Map, in insertion order.
```javascript
const map = new Map();
map.set('apple', 10);
map.set('banana', 5);
map.set('orange', 8);

const iterator = map.entries();
console.log(iterator); // [Map Entries] { [ 'apple', 10 ], [ 'banana', 5 ], [ 'orange', 8 ] }
