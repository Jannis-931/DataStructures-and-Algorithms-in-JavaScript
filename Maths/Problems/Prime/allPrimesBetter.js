const allPrimesBetter = (n, primes) => {
  // false -> prime
  // true -> not prime

  for (let i = 2; i*i <= n; i++) {
    if (!primes[i]) {
      for (let j = i * 2; j <= n; j += i) {
        primes[j] = true;
      }
    }
  }

  for (let i = 2; i <= n; i++) {
    if (!primes[i]) {
      console.log(i);
    }
  }
};

const n = 40;
// include 40
const primes = new Array(n + 1).fill(false);
const result = allPrimesBetter(n, primes);
