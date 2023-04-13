
let personFn = (name, surname, age) => {
    this.name = name;
    this.surname = surname;
    this.age = age;
    
}

let user = new personFn('andrii', 'Mykulych',24)

console.log(user)