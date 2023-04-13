let trimFn = (string) => {
    if (string.length <= 10) {
        string = string.trim()
        console.log(string)
    }
}


trimFn('  andrey  ')