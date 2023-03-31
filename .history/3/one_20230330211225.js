let numberOne = Number(prompt('Value number 1'));
let numberTwo = Number(prompt('Value number 2'));
let length = numberTwo - numberOne;
if (numberOne < numberTwo) {
    for (let i = numberOne; i < length; i++){
        let result =result + i; 
    }
} 
console.log(result)