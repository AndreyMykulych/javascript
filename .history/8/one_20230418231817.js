for (i = 0; i <= 10; i++) {
    let aEl = document.createElement('a');
    aEl.setAttribute(`${'href'},${'index'[i]'html`})
    
    let body = document.querySelector('body')

    body.appendChild(aEl)
}