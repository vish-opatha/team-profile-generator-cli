const Employee = require('./Employee');

class Intern extends Employee {
    constructor(id,empName,email, school){
        super(id,empName,email);
        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        //Need to override this method
        //Need to return `Intern`
    }
}

module.exports = Intern;



