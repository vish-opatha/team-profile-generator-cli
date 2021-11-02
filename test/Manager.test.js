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
    it('Returns the Manager name when getName() is called', () => {
      const id = 1;
      const empName = 'V Opatha';
      const empEmail = 'opatha@gmail.com';
      const officeNumber = '0480000000';

      const managerObj = new Manager(id, empName, empEmail, officeNumber);
      const mgrName = managerObj.getName();
      expect(mgrName).toEqual(empName);
    });
    it('Returns the Manager id value when getId() is called', () => {
      const id = 1;
      const empName = 'V Opatha';
      const empEmail = 'opatha@gmail.com';
      const officeNumber = '0480000000';

      const managerObj = new Manager(id, empName, empEmail, officeNumber);
      const mgrId = managerObj.getId();
      expect(mgrId).toEqual(id);
    });
    it('Returns the email when getEmail() is called', () => {
      const id = 1;
      const empName = 'V Opatha';
      const empEmail = 'opatha@gmail.com';
      const officeNumber = '0480000000';

      const managerObj = new Manager(id, empName, empEmail, officeNumber);
      const mgrEmail = managerObj.getEmail();

      expect(mgrEmail).toEqual(empEmail);
    });
    it('Returns the office number when getOfficeNumber() is called', () => {
      const id = 1;
      const empName = 'V Opatha';
      const empEmail = 'opatha@gmail.com';
      const officeNumber = '0480000000';

      const managerObj = new Manager(id, empName, empEmail, officeNumber);
      const telephone = managerObj.getOfficeNumber();

      expect(telephone).toEqual(officeNumber);
    });
    it("Returns 'Manager' when getRole() is called", () => {
      const id = 1;
      const empName = 'V Opatha';
      const empEmail = 'opatha@gmail.com';
      const officeNumber = '0480000000';

      const managerObj = new Manager(id, empName, empEmail, officeNumber);
      const role = managerObj.getRole();

      expect(role).toEqual('Manager');
    });
  });
});
