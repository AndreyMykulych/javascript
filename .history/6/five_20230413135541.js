let trimFn = (string) => {
    if (string.length <= 10) {
        string = string.trim()
        console.log(string)
    }
    else if (string.length > 10) {
        string = string.splice(10, '. . .')
        console.log(string)
    }
}


trimFn('andreysadasdasda')