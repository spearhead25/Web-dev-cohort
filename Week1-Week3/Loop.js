let teas = ["masala", "ginger", "oolong", "orange", "rose", "lemon"]

teas.length;

for(let h=0; h<teas.length; h++){
    console.log(`tea at index ${h}: ${teas[h]}`);
}


let myArray = [1, 4, 2, 3, 5, 6];

function sumfac(numbers){
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        sum = sum + numbers[i];
    }
    return sum;
}

let result = sumfac(myArray);
console.log(result);