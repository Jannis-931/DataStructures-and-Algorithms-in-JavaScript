# All Math Methods JavaScript

### Math.abs(x): 
- Returns the absolute value of x.
```javascript
// Math.abs(x)
console.log(Math.abs(-5)); // Output: 5
```

### Math.ceil(x): 
- Returns the smallest integer greater than or equal to x.
```javascript
// Math.ceil(x)
console.log(Math.ceil(3.2)); // Output: 4
```

### Math.floor(x): 
- Returns the largest integer less than or equal to x.
```javascript
// Math.floor(x)
console.log(Math.floor(3.9)); // Output: 3
```

### Math.round(x): 
- Returns the value of x rounded to the nearest integer.
```javascript
// Math.round(x)
console.log(Math.round(4.6)); // Output: 5
```

### Math.max(x1, x2, ..., xn): 
- Returns the largest value among the given numbers.
```javascript
// Math.max(x1, x2, ..., xn)
console.log(Math.max(2, 8, 5, 12)); // Output: 12
```

### Math.min(x1, x2, ..., xn): 
- Returns the smallest value among the given numbers.
```javascript
// Math.min(x1, x2, ..., xn)
console.log(Math.min(2, 8, 5, 12)); // Output: 2
```

### Math.pow(x, y): 
- Returns the value of x raised to the power of y.
```javascript
// Math.pow(x, y)
console.log(Math.pow(2, 3)); // Output: 8
```

### Math.sqrt(x): 
- Returns the square root of x.
```javascript
// Math.sqrt(x)
console.log(Math.sqrt(16)); // Output: 4
```

### Math.random(): 
- Returns a random number between 0 (inclusive) and 1 (exclusive).
```javascript
// Math.random()
console.log(Math.random()); // Output: a random number between 0 and 1
```

### Math.floor(Math.random() * (max - min + 1)) + min: 
- Returns a random integer between min (inclusive) and max (inclusive).
```javascript
// Generating a random integer between 1 and 10 (inclusive)
const randomInt = Math.floor(Math.random() * 10) + 1;
console.log(randomInt);
```