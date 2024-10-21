const fibonacci = require('./fibonacci');

// Test case for n = 0
console.assert(fibonacci(0) === 0, "Test case for n=0 failed");
console.log("Test case for n=0 passed");

// Update the function if needed, then add the next test

// Test case for n = 1
console.assert(fibonacci(1) === 1, "Test case for n=1 failed");
console.log("Test case for n=1 passed");

// Test case for n = 5
console.assert(fibonacci(5) === 5, "Test case for n=5 failed");
console.log("Test case for n=5 passed");

// Test case for n = 10
console.assert(fibonacci(10) === 55, "Test case for n=10 failed");
console.log("Test case for n=10 passed");

// Testing error for negative input
try {
    fibonacci(-1);
} catch (error) {
    console.log("Correctly raised Error for negative input.");
}
