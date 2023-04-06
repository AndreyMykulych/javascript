let gameArr = ['Камінь', "Ножниці", 'Папір']

let choice = prompt('Камінь,ножниці,папір....1.2.3!')

let randomIndexArray = Math.random() * gameArr.length
let randomChoice = gameArr[randomIndexArray]
alert(randomChoice)