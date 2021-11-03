const Intern = require('../lib/Intern');

describe('Intern Class', () => {
  describe('Initialization', () => {
    it("Returns an object with the properties when called 'new' keyword", () => {
      const internObj = new Intern();

      expect('id' in internObj).toEqual(true);
      expect('empName' in internObj).toEqual(true);
      expect('empEmail' in internObj).toEqual(true);
      expect('school' in internObj).toEqual(true);
    });
    it('Sets the value for properties when created', () => {
      const id = 1;
      const empName = 'V Opatha';
      const empEmail = 'opatha@gmail.com';
      const school = 'UOA';

      const internObj = new Intern(id, empName, empEmail, school);

      expect(internObj.id).toEqual(id);
      expect(internObj.empName).toEqual(empName);
      expect(internObj.empEmail).toEqual(empEmail);
      expect(internObj.school).toEqual(school);
    });
  });
  describe('Intern Methods', () => {
    it('Returns the name when getName() is called', () => {
      const id = 1;
      const empName = 'V Opatha';
      const empEmail = 'opatha@gmail.com';
      const school = 'UOA';

      const internObj = new Intern(id, empName, empEmail, school);
      const internName = internObj.getName();
      expect(internName).toEqual(empName);
    });
    it('Returns the Intern id value when getId() is called', () => {
      const id = 1;
      const empName = 'V Opatha';
      const empEmail = 'opatha@gmail.com';
      const school = 'UOA';

      const internObj = new Intern(id, empName, empEmail, school);
      const internId = internObj.getId();
      expect(internId).toEqual(id);
    });
    it('Returns the email when getEmail() is called', () => {
      const id = 1;
      const empName = 'V Opatha';
      const empEmail = 'opatha@gmail.com';
      const school = 'UOA';

      const internObj = new Intern(id, empName, empEmail, school);
      const internEmail = internObj.getEmail();

      expect(internEmail).toEqual(empEmail);
    });
    it('Returns the school when getSchool() is called', () => {
      const id = 1;
      const empName = 'V Opatha';
      const empEmail = 'opatha@gmail.com';
      const school = 'UOA';

      const internObj = new Intern(id, empName, empEmail, school);
      const internSchool = internObj.getSchool();

      expect(internSchool).toEqual(school);
    });
    it("Returns 'Intern' when getRole() is called", () => {
      const id = 1;
      const empName = 'V Opatha';
      const empEmail = 'opatha@gmail.com';
      const school = 'UOA';

      const internObj = new Intern(id, empName, empEmail, school);
      const role = internObj.getRole();

      expect(role).toEqual('Intern');
    });
  });
});
