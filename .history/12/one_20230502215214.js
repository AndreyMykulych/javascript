window.onload = () => {
    
    let CountLowerCase = (string) => {
        let lowerCaseArray = string.match(/\d\d/g)
        console.log(lowerCaseArray)
    }
    CountLowerCase('sadABs2a')
}