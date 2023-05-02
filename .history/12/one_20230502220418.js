window.onload = () => {
    
    let CountLowerCase = (string) => {
        let regEx = /[A-Z]/g;
        let lowerCaseArray = string.match(regEx)
        console.log(lowerCaseArray)
        console.log(`Кількість входжень ${lowerCaseArray.length}`)
    }
    CountLowerCase('sadABs2a')
}