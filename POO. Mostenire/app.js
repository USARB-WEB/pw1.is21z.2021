class Employee{
    constructor(){
        this.name = "Ion Creanga";
        this.age = 30;
        this.salary = 5000;
    }

    increaseSalary(value){
        this.salary += value;
    }

    decreaseSalary(value){
        this.salary -= value;
    }
}

class Programmer extends Employee{
    constructor(){
        super();
        this.name = "Ion Creanga";
        this.age = 30;
        this.salary = 5000;
    }
}

class Driver extends Employee{
    constructor(){
        super();
        this.name = "Ion Creanga";
        this.age = 30;
        this.salary = 5000;
    }
}


const employee = new Employee();

console.log(employee);

employee.increaseSalary(500);

console.log(employee);

employee.decreaseSalary(700);

console.log(employee);


const programmer = new Programmer();

console.log(programmer);
programmer.increaseSalary(3000);
console.log(programmer);


const driver = new Driver();

console.log(driver);
driver.increaseSalary(5000);
console.log(driver);