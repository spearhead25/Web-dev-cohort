let fruits = ["apple", "cherry", "banana"];
let intFruits = new Array("kiwi", "avacado", "dragon fruit");

fruits[0] = "Grapes";
fruits.push("Guava");
fruits.unshift("Mango");

console.log(fruits);
console.log(intFruits);

const teas = ["Green tea", "Black Tea", "Oolong Tea", "White Tea", "Herbal Tea"];
console.log(teas);

teas.push("Chamomile Tea");
let peas = teas.filter(item => item !== "Oolong Tea");
console.log(peas);

let index = teas.indexOf("Oolong Tea");
if(index !== -1){
    teas.splice(index,1);
}
console.log(teas);

console.log(teas.sort());

for(let i=0; i<teas.length; i++){
    console.log(teas[i]);
}

let count = 0;
for(let i=0; i<teas.length; i++){
     if(teas[i] !== "Herbal Tea"){
        count++;
     } 
}
console.log(count);

let uppercaseteas = teas.map(tea => tea.toUpperCase());
console.log(uppercaseteas);

let longestTea = "";
for(let i=0; i<teas.length; i++){
    if(teas[i].length > longestTea.length){
        longestTea = teas[i];
    }
}
console.log(longestTea);

let reverse = [];
for(let i=teas.length - 1; i>=0; i--){
    reverse.push(teas[i]);
}
console.log(reverse);





