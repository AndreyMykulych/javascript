window.onload = () => {
    
    let CountLowerCase = (string) => {
        let lowerCaseArray = string.match(/{A-Z}/g)
        console.log(lowerCaseArray)
    }
    CountLowerCase('sadABsa')
}