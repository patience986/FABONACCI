// Pair: Patience Nalweyiso & Sharon Onisia.

function fibonacci(n) {
    if (n < 0) {
        throw new Error("Fibonacci is not defined for negative numbers.");
    }
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

module.exports = fibonacci; // Export the function for testing
