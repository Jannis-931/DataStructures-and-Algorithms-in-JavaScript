// To find out all the numbers are less than and equal to 40.
// That are prime numbers.

const allPrime = (n) => {
  const prime = [];

  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      prime.push(i);
    }
  }
  return prime;
};

console.log(allPrime(40));


