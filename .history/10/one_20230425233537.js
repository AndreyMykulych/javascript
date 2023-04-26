window.onload = () => {
    //1) створрити блок який рухається всередині сторінки при натисканні стрілок на клавіатурі 
    let moveElement = document.querySelector('.moveBlock');
    moveElement.style.backgroundColor = 'red'
    moveElement.style.width = '100px'
    moveElement.style.height = '100px'
    let main = document.querySelector('body')

    moveElement.style.top = 0;
    moveElement.style.left = 0;
    moveElement.style.position = 'absolute'
     
    let x = 0;
    let y = 0;  

    let xMove = 10; 
    let yMove = 10;
    
    main.onkeydown = function (e) {
        console.log(e)
        if (e.code === "ArrowRight") {
            x = x + xMove;
            moveElement.style.left = x+'px'
        }
       else if (e.code === "ArrowDown") {
            y = y + yMove; 
            moveElement.style.top =  x +'px'
        }
        else if (e.code === "ArrowLeft") {
            x = x - xMove;
            moveElement.style.right = x+'px'
        }
        else if (e.code === "ArrowUp") {
            y = y - yMove;
            moveElement.style.bottom = y + 'px'
            moveElement.innerHTML = `X = ${x} Y =${y}`
        }
    }
}