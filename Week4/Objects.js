const person = {
    x: 10,
    firstName: "Harshul",
    lastName: "Malik",
    address: {
        hno: 1,
        street: 1,
        countryCode: 'IN',
    }
}

console.log(person.x);

const remote = {
    color: 'black',
    brand: 'XYZ',
    dimensions: {height: 1, width: 1},
    turnOff: function() {

    },
    volumeUp: function(){

    }
}

let p1 = {
    fname: "harry"
}

let p2 = p1;
p2.fname = "Parul";

console.log(p2);
console.log(p1);

const teas = {
    name: "Lemon tea",
    type: "Green",
    caffiene: "low"
}

console.log(teas.name);
console.log(teas["type"]);

teas.origin = "Assam";

teas.caffeine = "Medium";

delete teas.type;

console.log("origin" in teas);

for(let key in teas){
    console.log(key + ": " + teas[key]);
}

const myTeas = {
    greentea: {
        name: "Green Tea"
    },
    blackTea: {
        name: "Black Tea"
    }
}

//Before ES6, base blueprint was made using function constructor, but after ES6, now class blueprint is used rather

// function Person(fname, lname, contact){
//     this.fname = fname;
//     this.lname = lname;
//     this.contact = contact;

//     this.getName = function() {
//         console.log(this.fname, this.lname);
//     };
// }

// const person1 = new Person("harry", "doomi", "99999");
// const pn = new Person("Don", "Joe", "88888");
// const p3 = new Person("daisy", "Joe", "77777");

// console.log(person1);

class Person {
    constructor(fname, lname, contact) {
        this.fname = fname;
        this.lname = lname;
        this.contact = contact;
    }
    getContact() {
        console.log(this.contact);
    }
    getName() {
        console.log(this.fname, this.lname);
    }
}

const person1 = new Person("Harry", "Doe", "9999");
console.log(person1);
person1.getName();


const obj1 = {
    fname: "harii",
    lname: "potter",
    getFullname: function(){
        return `${this.fname} ${this.lname}`;
    },
};

const obj2 = {
    fname: "Anirudh",
    lname: "Jwala"
}


