let trimFn = (string) => {
    if (string.length <= 10) {
        string = string.trim()
        console.log(string)
    }
    else if (string.length > 10) {
        string1= string.substring(10, '. . .')
        console.log(string1)
    }
}


trimFn('andreysadasdasda')