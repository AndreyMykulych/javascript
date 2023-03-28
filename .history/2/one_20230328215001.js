let numberOne = Number(prompt("Введіть перше число"))
let numberTwo = Number(prompt('Введіть друге число'));

let operation = prompt('Введіть операцію одним символом');

if (operation === "+") {
    let result = numberOne + numberTwo;
}
else if (operation === "-") {
    let result = numberOne - numberTwo;
}
else if (operation === "*") {
    let result = numberOne * numberTwo;
}
else if (operation === "/") {
    if (numberTwo === 0) {
        alert('На 0 ділити не можна');
    }
    else {
        let result = numberOne / numberTwo;
    }
}
else {
    alert('Не правильна операція')
}
if (result !== undefined) {
    alert('Result is = ' + result)
}