//2) Створити html блок в якому повині змінюватись картиники  з массиву кожні 3 секунди, умова щоб слайд був безкінечним 
//   (картинки можутьбути локальними у вас в проекті тоді вказуєте шлях, або це може бути шлях до картинок з інтернету)
//2**) Створіть в слайдері стрілки наступна і попередня картинка, при наведенні мишки на слайдер він повинен зупинятись, 
//при виході мишки за межі слайдера продовжувати роботу

window.onload = () => {
    let imgArray = ['img/background1.png', 'img/girl.png', 'img/third_content.png']
    
   
    
   
    let slider = (imgArray) => {
        i = 0;
    let body = document.querySelector('body');
    let div = document.createElement('div')
    let img = document.createElement('img')
        img.setAttribute('src', imgArray[i])
        div.appendChild(img)
    body.appendChild(div)
    }
   
    setInterval(slider(imgArray),3000)
    
    div.appendChild(img)
    body.appendChild(div)
//     setInterval(() => {
//         for (i = 0; i <= imgArray.length; i++){
//             let div = document.createElement('div')
//             let img = document.createElement('img')
//             div.appendChild(img)
//             body.appendChild(div)
//             img.setAttribute('src', imgArray[0])
//             if (i <= 3) {
//                 i = 0;
//             }
//         }
//    },3000)
    
//     div.appendChild(img)
//     body.appendChild(div)
}