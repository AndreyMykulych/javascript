let numberOne = Number(prompt('Value number 1'));
let numberTwo = Number(prompt('Value number 2'));
let length = numberTwo - numberOne;
let result = 0;
if (numberOne < numberTwo) {
    for (let i = numberOne; i < numberTwo; i++){
        result =result + i; 
    }
} 
console.log(result)