class Person{
    constructor(){
        //console.log("Constructor call");
        //this.name = "Mihai Eminescu";
        this._firstName = "Eminescu";
        this._lastName = "Mihai";
        this._age = null;
    }

    get age() {
        if(!this._age) {
            return "Age is undefined";
        }
        return this._age;
    }

    set age(value) {
        if(value < 0) {
            console.log("Age is invalid");
        } else{
            this._age = value;
        }
    }

    getFullName(){
        //return this._firstName + " " + this._lastName;
        return `${this._firstName} ${this._lastName}`;
    }
}

const person = new Person();
console.log(person.getFullName());
console.log(person.age);
person.age = 21;
console.log(person.age);
person.age = -21;
console.log(person.age);
//console.log(person);