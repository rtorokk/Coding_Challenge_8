// Task 1: Employee Salary Calculation  
function calculateSalary(baseSalary, bonus, taxRate) {      
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);// formula for net salary     
    return `Net Salary: $${netSalary.toFixed(2)}`; // return the net salary 
};  

console.log(calculateSalary(5000, 500, 0.1)); // Expected output: "Net Salary : $5000.00" 
console.log(calculateSalary(7000, 1000, 0.15)); // Expected output: "Net Salary : $6950.00"


// Task 2 : Product Price After Discount

function calculateDiscount(price, discountRate) {
    let finalPrice = price - (price * discountRate); // formula for final price
    return `Final Price: $${finalPrice.toFixed(2)}`; // return the final price
};

console.log(calculateDiscount(100, 0.2)); // Expected output: "Final Price: $80.00"
console.log(calculateDiscount(250, 0.15)); // Expected output: "Final Price: $212.50"


// Task 3 : Service Fee Calculation

function calculateServiceFee(amount, serviceType) {
    let serviceFee = 0; // initialize the service fee
    if (serviceType === "premium") {
        serviceFee = amount * 0.15; // formula for express service fee
    } else if (serviceType === "standard") {
        serviceFee = amount * 0.10; // formula for standard service fee
    } else if (serviceType === "basic") {
        serviceFee = amount * 0.05; // formula for basic service fee
    }
    return `Service Fee: $${serviceFee.toFixed(2)}`; // return the service fee
};

console.log(calculateServiceFee(200, "premium")); // Expected output: "Service Fee: $30.00"
console.log(calculateServiceFee(500, "standard")); // Expected output: "Service Fee: $50.00"