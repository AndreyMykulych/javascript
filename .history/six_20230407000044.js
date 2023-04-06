let gameArr = ['Камінь', "Ножниці", 'Папір']
let game = (array) => {
    let choice = prompt('Камінь,ножниці,папір....1.2.3!')
    let stone = "Камінь";
    let scissors = 'Ножниці';
    let paper = 'Папір';


    let randomIndexArray = Math.floor(Math.random() * gameArr.length)
    console.log(randomIndexArray + 1)


    let randomChoice = gameArr[randomIndexArray]
    alert(randomChoice)

    if (choice === "stone" && randomChoice === scissors) {
        alert('You win!!!');
    }
    else if (choice === 'stone' && randomChoice === paper) {
        alert('You lose!!!')
    }
    else if (choice === randomChoice) {
        alert('Draw!!!')
     
    }
    else if (choice === scissors && randomChoice === stone) {
        alert('You lose!!!')
    }
    else if (choice === scissors && randomChoice === paper) {
        alert('You win!!!')
    }
    else if (choice === paper && randomChoice === stone) {
        alert('You win!!!')
    }
    else if (choice === paper && randomChoice === scissors) {
        alert('You lose!!!')
    }
}

game(gameArr)
