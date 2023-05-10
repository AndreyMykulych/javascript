function toCamelCase(str) {
    let strPattern = /[-_] /gm
    let index = str.indexOf(strPattern)
    console(index)
return str
}

toCamelCase('asda_sad')