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

