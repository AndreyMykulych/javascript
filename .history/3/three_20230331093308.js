



let numberRow = Number(prompt('Кількість рядів трикутника'));
let element = ""
for (let i = 0; i < numberRow; i++) {
    
    for (let j = 0; j < numberRow; j++){
        element=element+"*"
    }
}

console.log(element)