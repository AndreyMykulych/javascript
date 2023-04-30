let from = 1;
let to = 9

let printNumbers = () => {
   
    console.log(from)
    from++
    if (from > to) {
        clearInterval()
    }   
}


setInterval(printNumbers,2000)