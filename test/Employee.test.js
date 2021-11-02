const Employee = require('../lib/Employee');

describe('Employee Class', () => {
  describe('Initialization', () => {
    it("Returns an object with the properties when called 'new' keyword", () => {
      const employee = new Employee();

      expect('empName' in employee).toEqual(true);
      expect('id' in employee).toEqual(true);
      expect('empEmail' in employee).toEqual(true);
    });
    it('Sets the value for properties when created', () => {
      const id = 1;
      const empName = 'V Opatha';
      const empEmail = 'opatha@gmail.com';

      const employee = new Employee(id, empName, empEmail);

      expect(employee.empName).toEqual(empName);
      expect(employee.id).toEqual(id);
      expect(employee.empEmail).toEqual(empEmail);
    });
  });
  describe('Employee Methods', () => {
    it('Returns the employee name when getName() is called', () => {
      const id = 1;
      const empName = 'V Opatha';
      const empEmail = 'opatha@gmail.com';

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
