window.onload = () => {
    
    let CountLowerCase = (string) => {
        let regEx = /{A-Z}/g;
        let lowerCaseArray = regEx.match(string)
        console.log(lowerCaseArray)
    }
    CountLowerCase('sadABs2a')
}