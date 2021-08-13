const Employee = require('./Employee');

class Manager extends Employee {
    constructor(id,empName,email, officeNumber){
        super(id,empName,email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        //Need to override this method
        // Returns `Manager`
    }
}

module.exports = Manager;