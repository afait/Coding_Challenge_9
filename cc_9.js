// Task 1 - Created Employee Class

class Employee {
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    };
// Create a class that identifies Employees with the variables of name, id, department and salary

getDetails() {
    return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
};
// This method will return a string of all four details and their labels for the employee
calculateAnnualSalary() {
    return this.salary * 12
};
}; // returns the salary of the employee for the year
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000) // Establishes employee number 1 and their cooresponding properties

// Test Cases
console.log(emp1.getDetails()) // logs employee 1 details
console.log(emp1.calculateAnnualSalary()); // logs employee 1 annual salary