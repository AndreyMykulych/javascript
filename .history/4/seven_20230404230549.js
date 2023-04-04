let cordinatFn = () => {
    let cordinats = {
        
    }
    cordinats.left = Math.floor(Math.random() * 1000);
    cordinats.top = Math.floor(Math.random() * 100);
    return cordinats
}
console.log(cordinatFn())