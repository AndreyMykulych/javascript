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
        let ulElement = document.querySelector('ul') 
        let liElement = document.querySelector('li')
        for (let i = 0; i < array.length; i++){
            ulElement.innerHTML=array[i]
        }
    }
}