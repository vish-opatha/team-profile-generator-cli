const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(id, empName, empEmail, gitHub) {
    super(id, empName, empEmail);
    this.gitHub = gitHub;
  }

  getGithub() {
    return this.gitHub;
  }

  getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer;
