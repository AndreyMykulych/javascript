let gameArr = ['Камінь', "Ножниці", 'Папір']

// let choice = prompt('Камінь,ножниці,папір....1.2.3!')

let randomIndexArray = Math.floor(Math.random()* gameArr.length)
console.log(randomIndexArray+1)
let randomChoice = gameArr[randomIndexArray]
console.log(randomChoice)