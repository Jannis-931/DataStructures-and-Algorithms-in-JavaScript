// set(key, value):

const map = new Map();
map.set('apple', 10);
map.set('mango', 20);
map.set('orange', 30);
map.set('orange', 30);

console.log(map); // Map(3) { 'apple' => 10, 'mango' => 20, 'orange' => 30 }

// get(key)
console.log(map.get('apple'));

// has(key)
console.log(map.has('apple'));

// delete(key)
// map.delete('apple');
// console.log(map);

// clear()
// map.clear();
// console.log(map);

// size
console.log(map.size);

// forEach(callBack)

map.forEach((val, key) => console.log(val, key));

// keys()
console.log(map.keys()); // [Map Iterator] { 'apple', 'mango', 'orange' }

// values()
console.log(map.values()); // [Map Iterator] { 10, 20, 30 }

// entries()

const iterator = map.entries();
console.log(iterator);