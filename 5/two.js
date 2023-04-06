let removeArray = ["Keep", "Remove", "Keep", "Remove", "Keep", "Keep", "Remove", "Remove"] 
let keepArray = removeArray.filter(i => i != 'Remove')
 
console.log(keepArray)