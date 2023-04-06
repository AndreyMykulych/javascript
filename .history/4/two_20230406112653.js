

let promptFn = () => {
    let array = [];
    for (let i = 0; i < 3; i++) {
        let value = window.onload(prompt('Що купити?'));
        array.push(value)
    }

 
   
    return array;
}


console.log(promptFn())