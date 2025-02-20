function memoizedFibonacci() {
    let cache = {}; 

    function fib(n) {
        if (n in cache) return cache[n]; 
        if (n <= 1) return n; 

        cache[n] = fib(n - 1) + fib(n - 2); 
        return cache[n];
    }

    return fib; 
}

const fibonacci = memoizedFibonacci();

console.log(fibonacci(1)); 
console.log(fibonacci(2)); 
console.log(fibonacci(3)); 
console.log(fibonacci(10)); 
console.log(fibonacci(20)); 
console.log(fibonacci(30)); 