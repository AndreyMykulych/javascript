let from = 1;
let to = 9

let printNumbers = () => {
    for (i = from; i <= to; i++){
        console.log(i)
    }
}


setInterval(printNumbers,2000)