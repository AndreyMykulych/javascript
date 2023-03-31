



let numberRow = Number(prompt('Кількість рядів трикутника'));
let element = ""

for (let i = 0; i < numberRow; i++) {
    
    for (let j = 0; j <= i; j++){
        element=element+"*"
    }
    element = element + '/n'
}

console.log(element)