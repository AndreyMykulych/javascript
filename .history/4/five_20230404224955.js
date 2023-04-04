
    let congrat = (yearOfBirth) => {
        let currentYear = 2023;
        let userAge = currentYear - yearOfBirth;
        return userAge
    }
    
    console.log(congrat(1999))
    
    let years=[1999,2003,2020]
let usersAgeFn = (years,congrat) => {
    let usersAgeArray = [];
    for (i = 0; i < years.length; i++){
        let age = congrat (years[i])
        usersAgeArray.push(age)

    }
   return usersAgeArray
}

console.log(usersAgeFn())