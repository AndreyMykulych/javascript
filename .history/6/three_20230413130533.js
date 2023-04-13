let userArray = [
    {
        name: 'Andrii',
        age:15
    },
    {
        name: 'Olya',
        age:20
    },
    {
        name: 'Sergii',
        age : 23
    }
]


let sortFn = (Array) => {
    Array.sort((a, b) => {
        return(Array.a.age - Array.b.age)
    })
}


console.log(sortFn(userArray))