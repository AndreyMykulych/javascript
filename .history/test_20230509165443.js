function disemvowel(str) {
    let strPattern = /[aoiueAOUIE]/gm
    str=str.replace(strPattern,'')
    return str;
}
  console.log(disemvowel('ajior'))