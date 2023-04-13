function person  (name, surname, age)  {
    this.name = name;
    this.surname = surname;
    this.age = age;
    
}

person.prototype.personInfo = function (name, surname, age) {
    console.log(`User ${name} ${surname} with ${age} years old`)
}


person.prototype.changeUserName = function (newName) {
    this.name = newName;
}
let user = new person ('Andrii', 'Mykulych',23)

console.log(user)