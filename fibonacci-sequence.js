/**
 *  Finds a nth fibonacci number.
 *  A function uses a memoization to store previous value.
 *  Time complexity is: O(n).
 */
function fib(n) {
  const mem = [];
  mem[1] = 1;
  mem[2] = 1;
  for(let i = 3; i <= n; i++) {
      mem[i] = mem[i-1] + mem[i-2];
  };
  return mem[n];
}