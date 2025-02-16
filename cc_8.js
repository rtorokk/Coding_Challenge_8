// Task 1: Employee Salary Calculation  
function calculateSalary(baseSalary, bonus, taxRate) {      
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);// formula for net salary     
    return `Net Salary: $${netSalary.toFixed(2)}`; // return the net salary 
};  

console.log(calculateSalary(5000, 500, 0.1)); // Expected output: "Net Salary: $4950.00" 
console.log(calculateSalary(7000, 1000, 0.15)); // Expected output: "Net Salary: $6800.00"


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


// Task 4 : Car Rental Cost Calculation

function calculateRentalCost(days, carType, insurance = false) {
    let rentalCost = 0; // initialize the rental cost
    if (carType === "economy") {
        rentalCost = days * 40; // $40 per day for economy car
    } else if (carType === "standard") {
        rentalCost = days * 60; // $60 per day for standard car
    } else if (carType === "luxury") {
        rentalCost = days * 100; // $100 per day for luxury car
    }
    if (insurance) {
        rentalCost += days * 20; // add $20 per day for insurance
    }
    return `Rental Cost: $${rentalCost.toFixed(2)}`; // return the rental cost
}

console.log(calculateRentalCost(3, "economy", true)); // Expected output: "Rental Cost: $180.00"
console.log(calculateRentalCost(5, "luxury", false)); // Expected output: "Rental Cost: $500.00"


// Task 5: Loan Payment Calculation

function calculateLoanPayment(principal, rate, time) {
    let totalPayment = principal + (principal * rate * time); // formula for total payment
    return `Total Payment: $${totalPayment.toFixed(2)}`; // return the total payment
}

console.log(calculateLoanPayment(1000, 0.05, 2)); // Expected output: "Total Payment: $1100.00"
console.log(calculateLoanPayment(5000, 0.07, 3)); // Expected output: "Total Payment: $6050.00"


// Task 6 : Identifying Large Transactions

let transactions = [200, 1500, 3200, 800, 2500] // array of transactions with five elements
function filterLargeTransactions(transactions) {
    let filterlargeTransactions = transactions.filter(transaction => transaction > 1000); // filter transactions greater than 1000
    return filterlargeTransactions; // return the large transactions
}

console.log("Large Transactions", filterLargeTransactions(transactions)); // Expected output: [1500, 3200, 2500]


// Task 7 : Shopping Cart Tracker

function createCartTracker() {
    let cart = 0; // initialize the cart total
    return function(amount) {
        cart += amount; // add the amount to the cart total
        return `Cart Total: $${cart.toFixed(2)}`; // return the updated cart total
    }
}

const cartTracker = createCartTracker();
console.log("Total Cart Value:", cartTracker(20)); // Expected output: "Cart Total: $20.00"
console.log("Total Cart Value:", cartTracker(35)); // Expected output: "Cart Total: $55.00"


// Task 8 : Savings Growth Projection

function calculateSavings(years, amount) {
    if(years >=10){
        return amount.toFixed(2)// return the amount
    }
    return calculateSavings(years + 1, amount * 1.05)
}

const savings = calculateSavings(0, 1000);
console.log("Projected Savings: $" + calculateSavings(8, 1000)); // projected outcome: $1102.05
console.log("Projected Savings: $" + calculateSavings(5, 1000)); // projected outcome: $5525.63
