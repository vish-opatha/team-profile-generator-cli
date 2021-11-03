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
      expect(engineerObj.gitHub).toEqual(gitHub);
    });
  });
  describe('Engineer Methods', () => {
    it('Returns the name when getName() is called', () => {
      const id = 1;
      const empName = 'V Opatha';
      const empEmail = 'opatha@gmail.com';
      const gitHub = 'vish-opatha';

      const engineerObj = new Engineer(id, empName, empEmail, gitHub);
      const engineerName = engineerObj.getName();
      expect(engineerName).toEqual(empName);
    });
    it('Returns the Manager id value when getId() is called', () => {
      const id = 1;
      const empName = 'V Opatha';
      const empEmail = 'opatha@gmail.com';
      const gitHub = 'vish-opatha';

      const engineerObj = new Engineer(id, empName, empEmail, gitHub);
      const engineerId = engineerObj.getId();
      expect(engineerId).toEqual(id);
    });
    it('Returns the email when getEmail() is called', () => {
      const id = 1;
      const empName = 'V Opatha';
      const empEmail = 'opatha@gmail.com';
      const gitHub = 'vish-opatha';

      const engineerObj = new Engineer(id, empName, empEmail, gitHub);
      const engineerEmail = engineerObj.getEmail();

      expect(engineerEmail).toEqual(empEmail);
    });
    it('Returns the Github account when getGithub() is called', () => {
      const id = 1;
      const empName = 'V Opatha';
      const empEmail = 'opatha@gmail.com';
      const gitHub = 'vish-opatha';

      const engineerObj = new Engineer(id, empName, empEmail, gitHub);
      const github = engineerObj.getGithub();

      expect(github).toEqual(gitHub);
    });
    it("Returns 'Engineer' when getRole() is called", () => {
      const id = 1;
      const empName = 'V Opatha';
      const empEmail = 'opatha@gmail.com';
      const gitHub = 'vish-opatha';

      const engineerObj = new Engineer(id, empName, empEmail, gitHub);
      const role = engineerObj.getRole();

      expect(role).toEqual('Engineer');
    });
  });
});
