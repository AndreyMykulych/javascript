window.onload = () => {
    let aEl = document.createElement('a');
    aEl.innerHTML = 'Hello'
    
    let body = document.querySelector('body')

    body.appendChild(aEl)
}