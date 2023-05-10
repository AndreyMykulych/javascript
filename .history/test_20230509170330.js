function toCamelCase(str) {
    let strPattern = /[-_] /gm
    let index = str.indexOf(strPattern)
    console.log(index)
return str
}

toCamelCase('asda_sad')