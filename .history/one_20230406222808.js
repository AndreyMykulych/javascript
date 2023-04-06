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
let sqFn = (figurs) => {
    for (i = 0; i < 2; i++){
        let area = figurs.sizeA * figurs.sizeB;
    }
    return console.log(`Area ${figurs.figure} = ${area}`)
}

 console.log(sqFn(figurs))