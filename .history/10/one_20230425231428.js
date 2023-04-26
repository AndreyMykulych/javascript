window.onload = () => {
    //1) створрити блок який рухається всередині сторінки при натисканні стрілок на клавіатурі 
    let moveElement = document.querySelector('.moveBlock');
    moveElement.style.backgroundColor = 'red'
    moveElement.style.width = '100px'
    moveElement.style.height = '100px'
    let main = document.querySelector('body')

    main.style.position = 'relative'
    moveElement.style.position = 'absolute'
     
    let x = 0;
    let y = 0;  

    let xMove = 20; 
    let yMove = 20;
    
    main.onkeydown = function (e) {
        console.log(e)
       
        if (e.code === "ArrowDown") {
            y = y + yMove; 
            moveElement.style.top =  x +'px'
        }
        if (e.code === "ArrowLeft") {
            moveElement.style.right = '20px'
        }
        if (e.code === "ArrowRight") {
            moveElement.style.left = '20px'
        }
        if (e.code === "ArrowUp") {
            moveElement.style.bottom = '20px'
        }
    }
}