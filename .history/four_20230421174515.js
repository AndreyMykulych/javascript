window.onload = () => {
  //  Створіть інпут і кнопку, вводячи дані і натискаючи кнопку ви стоврюєте новий елемент списку покупок. 
  //  В елементі списка покупок, повиненно бути:  інформація з інпуту, час створення, а також кнопка при натисканні на яку елемент стає сірим(або позначається як куплений)
    let createInfoBtn = document.querySelector('.createInfo')
    let now;
    let body = document.querySelector('body')
    createInfoBtn.addEventListener('click',()=> {
        let inputElement = document.querySelector('input')
        console.log(inputElement)
        let inputValue = inputElement.value
        console.log(inputValue)
        now = new Date();
        console.log(now)
        let pEl = document.createElement('p')
        pEl.innerHTML = `${inputValue} ${now}`
        body.appendChild(pEl)
        let styleBtn = document.createElement('button');
        styleBtn.innerHTML = 'style button'
        body.appendChild(styleBtn)
        styleBtn.addEventListener('click', () => {
            pEl.style.backgroundColor = 'red'
        })
    })
}