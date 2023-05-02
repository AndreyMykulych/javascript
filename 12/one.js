window.onload = () => {
    
    //1) Напишіть функцію яка рахує кількість букв великого регістру в стрінгу і повертає кількість
    
    let CountLowerCase = (string) => {
        let regEx = /[A-Z]/g;
        let lowerCaseArray = string.match(regEx)
        console.log(lowerCaseArray)
        console.log(`Кількість входжень ${lowerCaseArray.length}`)
    }
    CountLowerCase('abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~")')
}