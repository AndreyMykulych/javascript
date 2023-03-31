let smile = [':)', '=)', ':)', '=)', ':)', '=)'];

for (let i = 0; i < smile.length; i++){
    if (smile[i] === '=)'){
        smile[i]=';)'
    }
}

console.log(smile)