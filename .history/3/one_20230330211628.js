
// Використовуючи цикл виведіть суму чисел між А і В з умовоб що А<B.


let numberOne = Number(prompt('Value number 1'));
let numberTwo = Number(prompt('Value number 2'));
let length = numberTwo - numberOne;
let result = 0;
if (numberOne < numberTwo) {
    for (let i = numberOne+1; i < numberTwo; i++){
        result =result + i; 
    }
} 
console.log(result)