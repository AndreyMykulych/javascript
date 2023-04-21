window.onload = () => {
    //1)Створити кнопку при натисканні на яку створюється дів з порядковим номером всередині, якщо створено більше 
    //5 дівів.Покажіть на сторінці кнопку, видалити всі створені елементи.При натисканні на кнопку
    //всі створенні div елементи видаляються
    let divCreatorButton = document.querySelector('.divCreator')
    
    let count = 0;
    let divCreatorListener = (e) => {
        e.preventDefault();
        
        let body = document.querySelector('body')
        let divContainer = document.createElement('div')
        let divCreatorElement = document.createElement('div')
        count++;
        divCreatorElement.innerHTML = count
       body.appendChild(divContainer)
        divContainer.appendChild(divCreatorElement)
        
        if (count>5) {
            let removeDivButton = document.createElement('button');
            body.appendChild(removeDivButton)

            let allDivEl = document.querySelectorAll('div')
            removeDivButton.innerHTML = 'remove div'
            removeDivButton.addEventListener('click', (e) => {
               
                divContainer.innerHTML = '';
                count = 0;

                removeDivButton.remove()
            })      
         }
    }
   
    divCreatorButton.addEventListener('click',divCreatorListener)
}