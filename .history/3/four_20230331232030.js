
let numberRow = Number(prompt('Кількість рядів прямокутника'));

let numberCol = Number(prompt('Кількість стовбців в прямокутнику'));

for (i = 1; i < numberRow; i++){
    let element = '';
    for (j = 1; j <numberCol; j++){
        element=element+'*'
    }
    console.log(element)
}
