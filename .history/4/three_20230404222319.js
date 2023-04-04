let sumFn = (array) => {
    let sum = 0;
    for (i = 0; i < array.length; i++){
        sum += array[i]
    }
    return sum
}

console.log(sumFn([1,2,3,4,5,6,7,8,9]))