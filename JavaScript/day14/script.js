let a = prompt("Enter first number:");
let b = prompt("Enter second number:"); 

console.log("the sum is " + (Number(a) + Number(b)));
console.log("the difference is " + (Number(a) - Number(b)));
console.log("the product is " + (Number(a) * Number(b)));
console.log("the quotient is " + (Number(a) / Number(b)));

if (Number(b) !== 0) {
    console.log("the remainder is " + (Number(a) % Number(b)));
} else {
    console.log("the remainder is undefined (division by zero)");
}

function main() {
try {
    console.log("the power is " + (Number(a) ** Number(x)));
    return true;
} catch (error) {
    console.log("Error calculating power: " + error.message);
    return false;
}

finally {
    console.log("Calculation complete.");
}
}

main();