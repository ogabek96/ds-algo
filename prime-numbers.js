/**
 * Prints prime numbers below n number.
 * This program uses a sieve of Eratosthenes algorithm.
 * This algorihm is fast and efficient.
 */
function primeNumbers(n) {
  const a = [];
  for(let p = 2; p*p <= n; p++) {
      if(!a[p]) {
          for(let i = p*p; i <= n; i+=p) {
              a[i] = 1; 
          }
      }
  }
  for(let i = 2 ; i < n; i++) {
      if(!a[i]) {
          console.log(i);
      }
  }
}