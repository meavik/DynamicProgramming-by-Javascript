//meomoization
const fib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
};
//general approach
// const fib = (n) =>{
//     if (n<=2) return 1;
//     return fib(n-1)+fib (n-2);
// };

console.log(fib(6));
console.log(fib(12));
console.log(fib(24));
console.log(fib(50));
console.log(fib(100));
console.log(fib(200));
