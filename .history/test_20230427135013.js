let printNumbers = (from,to) => {
    for (i = from; i <= to; i++){
        console.log(i)
    }
}


setInterval(printNumbers(1,9),2000)