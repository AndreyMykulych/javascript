let from = 1;
let to = 9

let printNumbers = (from, to) => {
    for (i = from; i <= to; i++){
        console.log(i)
    }
}


setInterval(printNumbers,2000)