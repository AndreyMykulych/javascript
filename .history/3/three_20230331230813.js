



let numberRow = Number(prompt('Кількість рядів трикутника'));

for (let i = 0; i < numberRow; i++) {
    let element = ""
    for (let j = 0; j <= i; j++){
        element=element+"*"
    }

    console.log(element)
}

