function disemvowel(str) {
    let strPattern = /[aoiue]/gm
    str.replace(strPattern,'')
    return str;
}
  console.log(disemvowel('ajior'))