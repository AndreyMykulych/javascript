window.onload = () => {
    
    let CountLowerCase = (string) => {
        let regEx = /[A-Z]/g;
        let lowerCaseArray = string.match(regEx)
        console.log(lowerCaseArray)
    }
    CountLowerCase('sadABs2a')
}