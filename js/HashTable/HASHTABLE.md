# Hash Table
In JavaScript, you can implement a hash table using an object or a Map data structure. Both options have their advantages and usage scenarios.

### Hash Table using Object:
- JavaScript objects can be used as hash tables by leveraging their key-value pair structure. The keys in an object are hashed internally for efficient lookup.
- **`Note`**: that object keys are always converted to strings. So if you use non-string keys, they will be implicitly converted to strings before being used as keys in the object.

Here's an example of creating and using a hash table using an object:
```javascript
// Creating a hash table using an object
const hashTable = {};

// Adding key-value pairs
hashTable['key1'] = 'value1';
hashTable['key2'] = 'value2';

// Accessing values
console.log(hashTable['key1']); // Output: 'value1'
console.log(hashTable['key2']); // Output: 'value2'

// Checking if a key exists
console.log('key1' in hashTable); // Output: true

// Deleting a key-value pair
delete hashTable['key1'];

// Checking if a key exists after deletion
console.log('key1' in hashTable); // Output: false
```

### Hash Table using Map:
- JavaScript also provides the Map data structure, which is specifically designed for key-value mappings and is iterable.
```javascript
// Creating a hash table using a Map
const hashTable = new Map();

// Adding key-value pairs
hashTable.set('key1', 'value1');
hashTable.set('key2', 'value2');

// Accessing values
console.log(hashTable.get('key1')); // Output: 'value1'
console.log(hashTable.get('key2')); // Output: 'value2'

// Checking if a key exists
console.log(hashTable.has('key1')); // Output: true

// Deleting a key-value pair
hashTable.delete('key1');

// Checking if a key exists after deletion
console.log(hashTable.has('key1')); // Output: false
```

- Map provides additional functionality compared to objects, such as the ability to iterate over keys or values and maintaining the insertion order of elements.
```javascript
// Creating a Map
const map = new Map();

// Adding key-value pairs
map.set('key1', 'value1');
map.set('key2', 'value2');
map.set('key3', 'value3');

// Iterating over keys
console.log('Keys:');
for (const key of map.keys()) {
  console.log(key);
}

// Iterating over values
console.log('Values:');
for (const value of map.values()) {
  console.log(value);
}

// Iterating over entries (key-value pairs)
console.log('Entries:');
for (const [key, value] of map.entries()) {
  console.log(`Key: ${key}, Value: ${value}`);
}

// Maintaining insertion order
console.log('Map Size:', map.size); // Output: 3
console.log('Map Entries:');
for (const [key, value] of map) {
  console.log(`Key: ${key}, Value: ${value}`);
}
```

### Hash Table allow duplicate value?
- In a traditional hash table implementation, each key in the table must be unique. However, the values associated with those keys can be duplicated. That means different keys can have the same value in a hash table.

For example, consider a hash table that stores student names and their corresponding ages:
```javascript
const hashTable = {};

hashTable['John'] = 18;
hashTable['Emily'] = 20;
hashTable['Michael'] = 18;
```
In this example, both John and Michael have the same age of 18. The values can be duplicated, but the keys must be unique.

If you need to store multiple values for the same key, you can modify the hash table implementation to handle that scenario. One common approach is to use an array or another data structure as the value for each key in the hash table.
```javascript
const hashTable = {};

hashTable['John'] = [18, 20];
hashTable['Emily'] = [20];
hashTable['Michael'] = [18];
```
In this modified implementation, the values are arrays, allowing you to store multiple values for the same key. John has two ages associated with him, while Emily and Michael have one each.