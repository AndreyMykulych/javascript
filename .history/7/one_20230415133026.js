window.onload = () => {
    //1)Створити html документ, в якому є теги header, footer, nav, ul список на 5 елементів li
    let header = document.getElementById('headBlock')
    console.log(header)
    let nav = document.getElementById('navBlock')
    console.log(nav)
    let footer = document.getElementById('footBlock')
    console.log(footer)
    let ul = document.getElementById('ulBlock')
    console.log(ul)
   //2) Отримати кожеш елемент з html документу в змінні
    let array = ['one', 'two', 'three', ' four', 'five']
    //3) Створити змінну з массивом і заповнити всі li елементи данними з масиву
    let ulFn = (array) => {
       
        let liElement = document.querySelector('li')
        for (let i = 0; i < array.length; i--){
            liElement.innerHTML = array[i]
        }
    }
    ulFn(array)
}
  