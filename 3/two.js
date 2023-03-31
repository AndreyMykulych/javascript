
//Зробити цикл який виводить дані навпаки від більшого до меншого.

let numberOne = Number(prompt('Value number 1'));
let numberTwo = Number(prompt('Value number 2'));



if (numberOne > numberTwo) {
    for (i = numberOne; i >= numberTwo; i--){
        console.log(i)
    }
}
else {
    for (i = numberTwo; i >= numberOne; i--){
        console.log(i)
    }
}