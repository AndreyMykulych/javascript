window.onload = () => {
    for (i = 0; i <= 10; i++) {
        let aEl = document.createElement('a');
    
        aEl.innerHTML = 'hello'
        let body = document.querySelector('body')

        body.appendChild(aEl)
    }
}