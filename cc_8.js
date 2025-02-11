// Task 1: Employee Salary Calculation  
function calculateSalary(baseSalary, bonus, taxRate) {      
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);// formula for net salary     
    return `Net Salary: $${netSalary.toFixed(2)}`; // return the net salary 
};  

console.log(calculateSalary(5000, 500, 0.1)); // Expected output: "Net Salary : $5000.00" 
console.log(calculateSalary(7000, 1000, 0.15)); // Expected output: "Net Salary : $6950.00"