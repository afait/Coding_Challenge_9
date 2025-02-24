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


// Task 2 - Created Manager Class with Inheritance

class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary);
        this.teamSize = teamSize
    };
// Created the class Manager which inherits from Employee
// Added new property teamSize

getDetails() {
    return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`
};
// Overrides getDetails so now it includes team size as a property
calculateBonus() {
    return (this.salary * 12) * .10
};
}; // Calculates a bonus based on 10% of the manager's annual salary

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
// Declare mgr1 as the new manager with properties

console.log(mgr1.getDetails()); // logs manager 1 details
console.log(mgr1.calculateBonus()); // logs the bonus amount for manager 1


// Task 3 - Created Company Class

class Company {
    constructor(name, employees) {
        this.name = name;
        this.employees = [];
}
// Created a company class with name and employees
addEmployee(employee) {
    this.employees.push(employee);
} // Adds an employee to the end of the array
listEmployees() {
    this.employees.forEach(employee => {console.log(employee.getDetails())});
}}; // Logs all of the employees and their details

const company = new Company("TechCorp"); // Let the company be named "TechCorp"
company.addEmployee(emp1); // Adds employee 1 to the company and logs their details
company.addEmployee(mgr1); // Adds manager 1 to the company and logs their details
company.listEmployees(); // Lists all the employees in the company
