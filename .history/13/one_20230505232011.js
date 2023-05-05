window.onload = () => {
   // 1) Створити кнопку, при кліку на яку в локалсторедж записуєтья ширина вікна перегляду користувача, а також іншим ключем висота екрану
    
    let btn = document.querySelector('.addStorageKey')

    btn.onclick = function ()  {
        localStorage.setItem('key1', window.screen.width)
        localStorage.setItem('key2', window.screen.height)
    }
}