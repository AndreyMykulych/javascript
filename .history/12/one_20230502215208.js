window.onload = () => {
    
    let CountLowerCase = (string) => {
        let lowerCaseArray = string.match(/\d/g)
        console.log(lowerCaseArray)
    }
    CountLowerCase('sadABsa')
}