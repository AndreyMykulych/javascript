window.onload = () => {
    //1) створрити блок який рухається всередині сторінки при натисканні стрілок на клавіатурі 
    let moveElement = document.querySelector('.moveBlock');
    moveElement.style.backgroundColor = 'red'
    moveElement.style.width = '100px'
    moveElement.style.height = '100px'
    let main = document.querySelector('body')

    main.style.position = 'relative'
    moveElement.style.position = 'absolute'
     
    moveElement.style.top= '50%'
     moveElement.left = '50%'
    main.onkeydown = function (e) {
        console.log(e)
        if (e.code === "ArrowDown") {
            moveElement.style.top =  '20px'
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