//2) Створити html блок в якому повині змінюватись картиники  з массиву кожні 3 секунди, умова щоб слайд був безкінечним 
//   (картинки можутьбути локальними у вас в проекті тоді вказуєте шлях, або це може бути шлях до картинок з інтернету)
//2**) Створіть в слайдері стрілки наступна і попередня картинка, при наведенні мишки на слайдер він повинен зупинятись, 
//при виході мишки за межі слайдера продовжувати роботу

window.onload = () => {
    
    
    let imgArray = ['img/thirdcontent.png','img/background1.png', 'img/girl.png',]
        let body = document.querySelector('body');
        let div = document.querySelector('div')
        let img = document.querySelector('img')
    
    let counter = 0;
    let slider = () => {
        img.src = imgArray[counter];
        counter++;
        if (counter === 3) {
            counter = 0;
            }
        }
    setInterval(slider, 2000)
    
    //через нехватку часу не втигаю зробити 2** завдання,на вихідних зроблю і скину на сайт =)
}