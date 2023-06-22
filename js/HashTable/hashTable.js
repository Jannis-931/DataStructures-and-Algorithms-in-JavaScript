/*
// Hash Table using Object:
const hashTable = {};

// adding
hashTable['key1'] = 'Sajib';
hashTable['key2'] = 'Rajib';
console.log(hashTable[1]); 

// checking
console.log(1 in hashTable);

// deleting
delete hashTable['key1'];
console.log(hashTable);
*/

// Hash Table using Map:
// const hashTable = new Map();

// adding
// hashTable.set(1, 'Sajib');
// hashTable.set(2, 'Sajib');
// hashTable.set(3, 'Sajib');
// hashTable.set(3, 'Rajib');
// console.log(hashTable);

// // accessing values
// console.log(hashTable.get(1))
// hashTable.delete(1);
// console.log(hashTable)

const map = new Map();

// Adding key-value pairs
map.set('key1', 'value1');
map.set('key2', 'value2');
map.set('key3', 'value9');

for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}