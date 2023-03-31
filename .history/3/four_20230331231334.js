
let numberRow = Number(prompt('Кількість рядів прямокутника'));

let numberCol = Number(prompt('Кількість стовбців в прямокутнику'));

for (i = 0; i < numberRow; i++){
    let element = '';
    for (j = 0; j < numberCol; j++){
        element=element+'*'
    }
    console.log(element)
}