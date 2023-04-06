let figurs = [
    {
        figure:"Squar",
        sizeA: 4,
        sizeB: 4
    },
    {
        figure:"Rectangle",
        sizeA: 4,
        sizeB: 8
    }
]
console.log(figurs)
let sqFn = (figurs) => {                                  // Перший варіант
    for (i = 0; i < figurs.length; i++) {
        let area = figurs[i].sizeA * figurs[i].sizeB;
        console.log(`Area ${figurs[i].figure} = ${area}`)
    }
   
} //Все розраховує правильно ,але чомусь після розрахунків добавляє undefined;

console.log(sqFn(figurs))
 
let squarFn = (figurs) => {                               // Другий варіант
    let areas = [];
    for (i = 0; i < figurs.length; i++){
        let area = figurs[i].sizeA * figurs[i].sizeB;
        areas.push(area)
    }
    return areas;
}

console.log(squarFn(figurs))