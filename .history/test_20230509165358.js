function disemvowel(str) {
    let strPattern = /[aoiue]/gm
    str=str.replace(strPattern,'')
    return str;
}
  console.log(disemvowel('ajior'))