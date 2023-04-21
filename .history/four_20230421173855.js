window.onload = () => {
  //  Створіть інпут і кнопку, вводячи дані і натискаючи кнопку ви стоврюєте новий елемент списку покупок. 
  //  В елементі списка покупок, повиненно бути:  інформація з інпуту, час створення, а також кнопка при натисканні на яку елемент стає сірим(або позначається як куплений)
    let createInfoBtn = document.querySelector('.createInfo')
    let now;
    createInfoBtn.addEventListener('click',()=> {
        let inputElement = document.querySelector('input')
        console.log(inputElement)
        let getValue = inputElement.value
        console.log(getValue)
        now = new Date();
        console.log(now)
    })
}