class Employee {
  constructor(id, firstName, lastName, taxId, salary) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.taxId = taxId;
    this.salary = salary;
  }

  generatePaySlip() {
    let monthlySalary = this.salary / 12;
    return `Employee ID: ${this.id} Name: ${this.firstName} ${this.lastName} Tax ID: ${this.taxId} Pay: ${monthlySalary}`;
  }
}
let checkEmployee = new Employee(1, `Izabela`, `Zuchowska`, 200, 1300);
let anEmployee = new Employee(123, "John", "Smith", 99090, 60000.0);

console.log(checkEmployee.generatePaySlip());
console.log(anEmployee.generatePaySlip());

class Manager extends Employee {
  constructor(id, firstName, lastName, taxId, salary) {
    super(id, firstName, lastName, taxId, salary);
    this.managedEmployees = [];
  }
  addManagedEmployee(employee) {
    this.managedEmployees.push(employee);
  }
  removeManagedEmployee(employee) {
    this.managedEmployees = this.managedEmployees.filter(function (e) {
      return e.id !== employee.id;
    });
  }
}

let aManager = new Manager(113, "Frank", "Pointyhair", 88454, 90000.0);
console.log(aManager.generatePaySlip());

const a = {
  id: 1,
  firstName: "Izabela",
  lastName: "Zuchowska",
  salary: 3250,
};
const b = {
  id: 2,
  firstName: "Pawel",
  lastName: "Zuchowski",
  salary: 2350,
};
aManager.addManagedEmployee(a);
aManager.addManagedEmployee(b);
console.log(aManager.managedEmployees);
aManager.removeManagedEmployee(a);
console.log(aManager.managedEmployees);
