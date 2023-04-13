
let personConstructor = (name, surname, age) => {
    this.name = name;
    this.surname = surname;
    this.age = age;
    
}

let user = new personConstructor('andrii', 'Mykulych',24)

console.log(user)