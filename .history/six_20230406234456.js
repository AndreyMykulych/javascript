let gameArr = ['Камінь', "Ножниці", 'Папір']

// let choice = prompt('Камінь,ножниці,папір....1.2.3!')

let randomIndexArray = Math.random() * gameArr.length
console.log(randomIndexArray)
let randomChoice = gameArr[randomIndexArray]
console.log(randomChoice)