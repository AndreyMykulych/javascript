



let numberRow = Number(prompt('Кількість рядів трикутника'));
let element = ""
let br = document.createElement("br");
for (let i = 0; i < numberRow; i++) {
    
    for (let j = 0; j <= i; j++){
        element=element+"*"
    }
    element = element + br
}

console.log(element)