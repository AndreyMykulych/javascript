window.onload = () => {
    let body = document.querySelector('body')
    for (i = 0; i <= 10; i++) {
        let aEl = document.createElement('a');
        aEl.innerHTML = 'hello'+ '<br>'
        
        aEl.setAttribute('menu-item')
          
        body.appendChild(aEl)
    }
}