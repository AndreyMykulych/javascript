
function person  (name, surname, age)  {
    this.name = name;
    this.surname = surname;
    this.age = age;
    
}

person.prototype.personInfo = function (name, surname, age) {
    console.log(`User ${name} ${surname} with ${age} years old`)
}

let user = new person ('andrii', 'Mykulych',24)

console.log(user)