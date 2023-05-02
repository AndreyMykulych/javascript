window.onload = () => {
    
    let CountLowerCase = (string) => {
        let regEx = /[A-Z]/g;
        let lowerCaseArray = regEx.exec(string)
        console.log(lowerCaseArray)
    }
    CountLowerCase('sadABs2a')
}