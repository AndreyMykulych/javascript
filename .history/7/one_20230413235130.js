window.onload = () => {
    
    let header = document.getElementById('headBlock')
    console.log(header)
    let nav = document.getElementById('navBlock')
    console.log(nav)
    let footer = document.getElementById('footBlock')
    console.log(footer)
    let ul = document.getElementById('ulBlock')
    console.log(ul)

    let array = ['one', 'two', 'three', ' four', 'five']
    
    let ulFn = (array) => {
        for (let i = 0; i < array.length; i++){
            ul.innerHTML=array[i]
        }
    }
}