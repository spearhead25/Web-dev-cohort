const p1 = {
    fname: "Hari",
    lname: "Om",
    getFullname() {
        return `${this.fname} ${this.lname}`;
    },
};

const p2 = Object.create(p1);

console.log("p1 is", p1.fname);
p2.__proto__.fname = "Hack";

console.log("p1 after is", p1.fname);