function disemvowel(str) {
    let strPattern = /[aoiue]/gm
    str.replace(strPattern,'')
    return str;
}
  disemvowel('ajior')