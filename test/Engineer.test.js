const Engineer = require('../lib/Engineer');

describe('Engineer Class', () => {
  describe('Initialization', () => {
    it("Returns an object with the properties when called 'new' keyword", () => {
      const engineerObj = new Engineer();

      expect('id' in engineerObj).toEqual(true);
      expect('empName' in engineerObj).toEqual(true);
      expect('empEmail' in engineerObj).toEqual(true);
      expect('gitHub' in engineerObj).toEqual(true);
    });
    it('Sets the value for properties when created', () => {
      const id = 1;
      const empName = 'V Opatha';
      const empEmail = 'opatha@gmail.com';
      const gitHub = 'vish-opatha';

      const engineerObj = new Engineer(id, empName, empEmail, gitHub);

      expect(engineerObj.id).toEqual(id);
      expect(engineerObj.empName).toEqual(empName);
      expect(engineerObj.empEmail).toEqual(empEmail);
      expect(engineerObj.officeNumber).toEqual(officeNumber);
    });
  });
  describe('Manager Methods', () => {
    it('Returns the Manager name when getName() is called', () => {
      const id = 1;
      const empName = 'V Opatha';
      const empEmail = 'opatha@gmail.com';
      const gitHub = 'vish-opatha';

      const engineerObj = new Engineer(id, empName, empEmail, gitHub);
      const mgrName = managerObj.getName();
      expect(mgrName).toEqual(empName);
    });
    it('Returns the Manager id value when getId() is called', () => {
      const id = 1;
      const empName = 'V Opatha';
      const empEmail = 'opatha@gmail.com';
      const gitHub = 'vish-opatha';

      const engineerObj = new Engineer(id, empName, empEmail, gitHub);
      const mgrId = managerObj.getId();
      expect(mgrId).toEqual(id);
    });
    it('Returns the email when getEmail() is called', () => {
      const id = 1;
      const empName = 'V Opatha';
      const empEmail = 'opatha@gmail.com';
      const gitHub = 'vish-opatha';

      const engineerObj = new Engineer(id, empName, empEmail, gitHub);
      const mgrEmail = managerObj.getEmail();

      expect(mgrEmail).toEqual(empEmail);
    });
    it('Returns the Github account when getGithub() is called', () => {
      const id = 1;
      const empName = 'V Opatha';
      const empEmail = 'opatha@gmail.com';
      const gitHub = 'vish-opatha';

      const engineerObj = new Engineer(id, empName, empEmail, gitHub);
      const telephone = managerObj.getOfficeNumber();

      expect(telephone).toEqual(officeNumber);
    });
    it("Returns 'Manager' when getRole() is called", () => {
      const id = 1;
      const empName = 'V Opatha';
      const empEmail = 'opatha@gmail.com';
      const officeNumber = '0480000000';

      const managerObj = new Engineer(id, empName, empEmail, officeNumber);
      const role = managerObj.getRole();

      expect(role).toEqual('Manager');
    });
  });
});
