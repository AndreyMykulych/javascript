window.onload = () => {
    //1)Створити html документ, в якому є теги header, footer, nav, ul список на 5 елементів li.
   
   
    //2) Отримати кожеш елемент з html документу в змінні.
    let header = document.getElementById('headBlock')
    console.log(header)
    let nav = document.getElementById('navBlock')
    console.log(nav)
    let footer = document.getElementById('footBlock')
    console.log(footer)
    let ul = document.getElementById('ulBlock')
    console.log(ul)
   

    //3) Створити змінну з массивом і заповнити всі li елементи данними з масиву.
    let array = ['one', 'two', 'three', ' four', 'five']

    let ulFn = (array) => {
       
      
        for (let i = 0; i < array.length; i++){
            let liElement = document.getElementsByTagName('li')
            liElement[i].append(array[i])
        }
    }
    ulFn(array)


    //4)Створіть функцію яка приймає массив обєктів і створює div з классом
    //product - list в якому є карторчки товару в вигляді діва з класом card  в середині інформація з обєкте

let createFn = () => {
    let divElement = document.createElement('div')
        divElement.className = '.product-list'
        divElement.innerHTML = 'I`m DIV Element'
    
    
    let divElementCard = divElement;
        divElementCard.className = '.card'
        divElementCard.innerHTML= ' I`m div card element'
    
      divElement.append(divElementCard)
    console.log(divElement)
  }
createFn()
}
