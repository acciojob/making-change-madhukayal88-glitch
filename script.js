
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
