window.onload = () => {
    //1)Створити кнопку при натисканні на яку створюється дів з порядковим номером всередині, якщо створено більше 
    //5 дівів.Покажіть на сторінці кнопку, видалити всі створені елементи.При натисканні на кнопку
    //всі створенні div елементи видаляються
    let divCreatorButton = document.querySelector('.divCreator')
    console.log(divCreatorButton)
    let divCreatorListener = (e) => {
        e.preventDefault();
        let count = 1;
        let body = document.querySelector('body')
        let divCreatorElement = document.createElement('div')
        count++;
        divCreatorElement.innerHTML = count
        body.appendChild(divCreatorElement)
       
    }
    divCreatorButton.addEventListener('click',divCreatorListener)
}