window.onload = () => {
    //1) створрити блок який рухається всередині сторінки при натисканні стрілок на клавіатурі 
    let moveElement = document.querySelector('.moveBlock');
    moveElement.style.backgroundColor = 'red'
    moveElement.style.width = '100px'
    moveElement.style.height = '100px'
    let main = document.querySelector('body')
    main.onkeydown = function (e) {
        console.log(e)
        if (e.code === "ArrowDown") {
            moveElement.style.margintop = '20px'
        }
    }
}