const numberOfSteps = function (n) {
  return helper(n, 0);
};

const helper = function(n, steps) {
  if (n === 0) {
    return steps;
  }

  if (n % 2 === 0) {
    return helper(Math.floor(n/2), steps + 1);
  } 
  return helper(n - 1, steps + 1);
  
}

console.log(numberOfSteps(123));
