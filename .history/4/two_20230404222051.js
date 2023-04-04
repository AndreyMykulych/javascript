

let promptFn = () => {
let valueOne = prompt('Що купити?');
let valueTwo = prompt('Що купити?');
    let valueThree = prompt('Що купити?');
    let array = [];
    array.push(valueOne)
    array.push(valueTwo)
    array.push(valueThree)
    return array;
}


console.log(promptFn())