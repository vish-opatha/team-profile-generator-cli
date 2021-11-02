const Employee = require('./Employee');

class Manager extends Employee {
  constructor(id, empName, empEmail, officeNumber) {
    super(id, empName, empEmail);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return 'Manager';
  }
}

module.exports = Manager;
