const Manager = require('../lib/Manager');

describe('Manager Class', () => {
  describe('Initialization', () => {
    it("Returns an object with the properties when called 'new' keyword", () => {
      const managerObj = new Manager();

      expect('id' in managerObj).toEqual(true);
      expect('empName' in managerObj).toEqual(true);
      expect('empEmail' in managerObj).toEqual(true);
      expect('officeNumber' in managerObj).toEqual(true);
    });
    it('Sets the value for properties when created', () => {
      const id = 1;
      const empName = 'V Opatha';
      const empEmail = 'opatha@gmail.com';
      const officeNumber = '0480000000';

      const managerObj = new Manager(id, empName, empEmail, officeNumber);

      expect(managerObj.id).toEqual(id);
      expect(managerObj.empName).toEqual(empName);
      expect(managerObj.empEmail).toEqual(empEmail);
      expect(managerObj.officeNumber).toEqual(officeNumber);
    });
  });
  describe('Manager Methods', () => {
    it('Returns the employee name when getName() is called', () => {
      const id = 1;
      const empName = 'V Opatha';
      const empEmail = 'opatha@gmail.com';
      const officeNumber = '0480000000';

      const employee = new Employee(id, empName, empEmail);

      const employeeName = employee.getName();

      expect(employeeName).toEqual(empName);
    });
    it('Returns the employee id value when getId() is called', () => {
      const id = 1;
      const empName = 'V Opatha';
      const empEmail = 'opatha@gmail.com';

      const employee = new Employee(id, empName, empEmail);

      const employeeId = employee.getId();

      expect(employeeId).toEqual(id);
    });
    it('Returns the email when getEmail() is called', () => {
      const id = 1;
      const empName = 'V Opatha';
      const empEmail = 'opatha@gmail.com';

      const employee = new Employee(id, empName, empEmail);

      const employeeEmail = employee.getEmail();

      expect(employeeEmail).toEqual(empEmail);
    });
    it("Returns 'employee' when getRole() is called", () => {
      const id = 1;
      const empName = 'V Opatha';
      const empEmail = 'opatha@gmail.com';

      const employee = new Employee(id, empName, empEmail);
      const employeeRole = employee.getRole();

      expect(employeeRole).toEqual('employee');
    });
  });
});
