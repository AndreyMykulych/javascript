window.onload = () => {
    let body = document.querySelector('body')
    for (i = 1; i <= 10; i++) {
        let aEl = document.createElement('a');
        aEl.innerHTML = 'hello'+ '<br>'
        
        aEl.setAttribute('href',`index.${i}html`)
        aEl.classList.add('menu-item')
        aEl.classList.add('target')
        body.appendChild(aEl)
    }
}