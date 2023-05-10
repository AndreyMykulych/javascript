function toCamelCase(str) {
    let strPattern = /[-] /gm
    let index = str.indexOf(strPattern)
    console.log(index)
return str
}

toCamelCase('asdasad_-')