class Employee {
    // Constructor function of the Employee class
    constructor(id, empName, empEmail) {
      this.id = id;
      this.empName = empName;
      this.empEmail = empEmail;
    }
  
    getId(){
        return this.id;
    }

    getName(){
      return this.empName;
    };

    getEmail(){
        return this.empEmail;
    };

    getRole(){
        return `employee`;
    }; 
  }

  module.exports = Employee;