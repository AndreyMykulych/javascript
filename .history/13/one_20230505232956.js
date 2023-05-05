window.onload = () => {
   // 1) Створити кнопку, при кліку на яку в локалсторедж записуєтья ширина вікна перегляду користувача, а також іншим ключем висота екрану
    
    let btn = document.querySelector('.addStorageKey')
    let p = document.querySelector('p') 
    btn.onclick = function ()  {
      let key1=  localStorage.setItem('key1', window.screen.width)
       let key2 = localStorage.setItem('key2', window.screen.height)
        p.innerHTML = `width =${window.screen.width}`
        p.innerHTML = '</br>'
        p.innerHTML=`height = ${window.screen.height}`
       
    }
}