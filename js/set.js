// add(value)

const set = new Set();
set.add('apple');
set.add('mango');
set.add('orange');
set.add('banana');

console.log(set); // Set(3) { 'apple', 'mango', 'orange', 'banana' }

// delete(value)
// set.delete('mango');
// console.log(set); // Set(2) { 'apple', 'orange', 'banana' }

// has(value): true/false
console.log(set.has('apple')); // true

// clear()
// set.clear();
// console.log(set); {}

// size
console.log(set.size); // 4

// forEach(callbackFn)
// const set1 = new Set(['apple', 'mango', 'orange']);
// set1.forEach((value) => {
//     console.log(value);
// });

// keys
const set2 = new Set(['apple', 'mango', 'orange']);
const keys = set2.keys();
console.log(keys); // [Set Iterator] { 'apple', 'mango', 'orange' }

const numSet = new Set([1, 2, 3, 4]);
console.log(numSet.keys()); // [Set Iterator] { 1, 2, 3, 4 }


// const entry = numbers.entries();
// console.log(entry);

// values()
const set3 = new Set(['apple', 'banana', 'orange']);
console.log(set3.values()); // [Set Iterator] { 'apple', 'banana', 'orange' }

const numSet1 = new Set([1, 2, 3, 4]);
console.log(numSet1.values()); // [Set Iterator] { 1, 2, 3, 4 }

// entries()
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