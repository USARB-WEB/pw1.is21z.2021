class Employee{
    constructor(){
        this._firstName = "Eminescu";
        this._lastName = "Mihai";
        this._age = 22;
        this._salary = 1000;
    }

    increaseSalary(percent) {
        this._salary = this._salary * (percent / 100 + 1);
    }
    
    decreaseSalary(percent) {
        this._salary = this._salary * (1 - percent / 100);
    }
}


class Programmer extends Employee{
    constructor(){
        super();
        this._firstName = "Russo";
        this._lastName = "Alecu";
        this._age = 22;
        this._salary = 1000;
    }
}

class Driver extends Employee{
    constructor(){
        super();
        this._firstName = "Creanga";
        this._lastName = "Ion";
        this._age = 22;
        this._salary = 1000;
    }
}

const employee = new Employee();
console.log(employee);
employee.increaseSalary(20);
console.log(employee);
employee.decreaseSalary(20);
console.log(employee);


const programmer = new Programmer();
console.log(programmer);
programmer.increaseSalary(20);
console.log(programmer);
programmer.decreaseSalary(20);
console.log(programmer);

const driver = new Driver();
console.log(driver);
driver.increaseSalary(20);
console.log(driver);
driver.decreaseSalary(20);
console.log(driver);