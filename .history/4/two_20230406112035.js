

let promptFn = () => {
    let array = [];
    for (let i = 0; i < 3; i++) {
        let value = prompt('Що купити?');
        array.push(value)
    }

 
   
    return array;
}


console.log(promptFn())