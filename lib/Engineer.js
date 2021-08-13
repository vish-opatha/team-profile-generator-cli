const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(id,empName,email, gitHub){
        super(id,empName,email);
        this.gitHub = gitHub;
    }

    getGithub(){
        return this.gitHub;
    }

    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;