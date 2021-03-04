class Person{
    constructor(){
        //console.log("Person created");
        this._firstName = "Creanga";
        this._lastName = "Ion";
        this._age = null;
    }

    get firstName(){
        return this._firstName;
    }

    set age(value){
        if(value < 0){
            console.log("Age can not be negative");
            return;
        }
        this._age = value;
    }

    get age(){
        if(this._age === null){
            return "Age undefined";
        }
        return this._age;
    }

    getFullName(){
        //return this.lastName + ' ' + this.firstName;
        return `${this._lastName} ${this._firstName}`;
    }

}

const person = new Person();
//console.log(person.firstName);
//console.log(person.getFullName());
//console.log(person);
console.log(person.age);
person.age = -88;
console.log(person.age);
