/**
 * Calculates the most efficient way to make change using USD quarters, dimes, nickels, and pennies.
 *
 * @param {number} amount - The amount of monetary change in cents (0 < amount < 100).
 * @returns {object} An object with properties q, d, n, and p representing the number of each coin.
 */
function makeChange(amount) {
    let remainingAmount = amount;
    
    // Calculate quarters (25 cents)
    const quarters = Math.floor(remainingAmount / 25);
    remainingAmount %= 25;
    
    // Calculate dimes (10 cents)
    const dimes = Math.floor(remainingAmount / 10);
    remainingAmount %= 10;
    
    // Calculate nickels (5 cents)
    const nickels = Math.floor(remainingAmount / 5);
    remainingAmount %= 5;
    
    // Calculate pennies (1 cent)
    const pennies = remainingAmount;
    
    return {
        q: quarters,
        d: dimes,
        n: nickels,
        p: pennies
    };
}

// Example Usage:
console.log("makeChange(47):", makeChange(47));
console.log("makeChange(24):", makeChange(24));
console.log("makeChange(99):", makeChange(99));
