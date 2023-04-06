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
    let areaSquar=figurs.sizeA * figurs.sizeB;
    console.log(`Area squar ${areaSquar}`)
}

 console.log(sqFn(figurs))