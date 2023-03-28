let numberOne = Number(prompt("Введіть перше число"))
let numberTwo = Number(prompt('Введіть друге число'));

let operation = prompt('Введіть операцію одним символом');

if (operation === "+") {
    console.log(`Sum = ${numberOne*numberTwo}`)
}