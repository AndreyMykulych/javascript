window.onload = () => {
    //1) створрити блок який рухається всередині сторінки при натисканні стрілок на клавіатурі 
    let moveElement = document.querySelector('.moveBlock');
    moveElement.style.backgroundColor = 'red'
    moveElement.style.width = '100px'
    moveElement.style.height = '100px'

    let block = document.querySelector('.block');
    block.style.width = '940px'
    block.style.height = '500px'
    block.style.border = '2px solid black'
    block.style.position = 'relative'
    let main = document.querySelector('body')

    moveElement.style.top = 0;
    moveElement.style.left = 0;
    moveElement.style.position = 'absolute'
     
    let x = 0;
    let y = 0;  

    let xMove = 10; 
    let yMove = 10;
    
   main.addEventListener('keydown', function (e) {
        console.log(e)
        if (e.code === "ArrowRight" && x <=830) {
            x = x + xMove;
            moveElement.style.left = x + 'px'
            moveElement.innerHTML = `X = ${x} Y =${y}`
        }
       else if (e.code === "ArrowDown" && y<=390) {
            y = y + yMove; 
            moveElement.style.top = y + 'px'
            moveElement.innerHTML = `X = ${x} Y =${y}`
        }
        else if (e.code === "ArrowLeft" && x>=0) {
            x = x - xMove;
            moveElement.style.left = x + 'px'
            moveElement.innerHTML = `X = ${x} Y =${y}`
        }
        else if (e.code === "ArrowUp") {
            y = y - yMove;
            moveElement.style.top = y + 'px'
            moveElement.innerHTML = `X = ${x} Y =${y}`
        }
    })
}