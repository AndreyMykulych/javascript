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
let user1 = new person ('Andrii', 'Mykulych',24)
let user2 = new person('Olya', 'Kremsal', 21)
let user3 = new person('Bohdan', 'Soroka', 23)
 
let userArray = [user1,user2,user3]

console.log(user1,user2,user3)