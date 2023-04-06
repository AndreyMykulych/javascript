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
let sqFn = (figure, sizeA, sizeB) => {
    for (i = 0; i < 2; i++){
        let area = sizeA * sizeB;
        console.log(`Area ${figure} = ${area}`)
    }
}

 console.log(sqFn(figurs))