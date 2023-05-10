function toCamelCase(str) {
    let strPattern = /[-] /gm
    let index = str.indexOf(strPattern)
    console.log(index)

}

toCamelCase('_asdasad_-')