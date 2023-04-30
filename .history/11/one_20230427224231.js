window.onload = () => {
    let formElLoggin = document.querySelector('.auth');
    let formElPizza = document.querySelector('.pizzaForm');

    formElLoggin.onsubmit = (e) => {
        let login = document.querySelector("#login")
        let password = document.querySelector("#password")

        let isValid = true;
        
        if (login.value.length === 0) {
            isValid=false
           login.style.backgroundColor='red'
        }
        if (password.value.length === 0) {
            login.style.backgroundColor ='red'
        }
        console.log(login.value.length)
    }
}