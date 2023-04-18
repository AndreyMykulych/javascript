window.onload = () => {

    //1) Створіть 10 тегів А в яких заданий 
    //class="menu-item", target, href зі занченнями index1.html, index2.html і т.д
    let body = document.querySelector('body')
    for (i = 1; i <= 10; i++) {
        let aEl = document.createElement('a');
        aEl.innerHTML = 'hello'+ '<br>'
        
        aEl.setAttribute('href',`index.${i}html`)
        aEl.classList.add('menu-item')
        aEl.classList.add('target')
        //Задайте створеним елементам за допомогою 
        //js правило display: inline - block, падінг 20рх а також змініть колір на червоний
         
        aEl.style.padding = '20px';
        aEl.style.color = 'red'
        aEl.style.display = 'inline-block'
        
        //Задайте 3 елементу в списку додатковий класс active
       
        if (i = 3) {
            console.log(i)
        }

        body.appendChild(aEl)
    }
    
}