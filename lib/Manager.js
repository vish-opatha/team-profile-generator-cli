const Employee = require('./Employee');

class Manager extends Employee {
    constructor(id,empName,empEmail, officeNumber){
        super(id,empName,empEmail);
        this.officeNumber = officeNumber;
    }

    getRole(){
        //Need to override this method
        // Returns `Manager`
    }
}

module.exports = Manager;