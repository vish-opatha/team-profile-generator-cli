const Employee = require('./Employee');

class Intern extends Employee {
  constructor(id, empName, empEmail, school) {
    super(id, empName, empEmail);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return 'Intern';
  }
}

module.exports = Intern;
