
    let congrat = (yearOfBirth) => {
        let currentYear = 2023;
        let userAge = currentYear - yearOfBirth;
        return userAge
    }
    
    console.log(congrat(1999))
    
let usersAgeFn = (array,congrat) => {
    let usersAgeArray = [];
    for (i = 0; i < array.length; i++){
        let age = congrat (array[i])
        usersAgeArray.push(age)

    }
   return usersAgeArray
}

console.log(usersAgeFn(1999,2002,2023))