let from = 1;
let to = 9

let printNumbers = () => {
   
    console.log(from)
    from++
    if (from > to) {
        clearInterval(timer)
    }   
}


let timer = setInterval(printNumbers,2000)