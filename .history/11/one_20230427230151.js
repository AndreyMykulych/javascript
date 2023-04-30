window.onload = () => {
    let formElLoggin = document.querySelector('.auth');
    let formElPizza = document.querySelector('.pizzaForm');

    formElLoggin.onsubmit = (e) => {
        let login = document.querySelector("#login")
        let password = document.querySelector("#password")
  
        if (login.value.length === 0 || password.value.length === 0) {
            document.querySelector('.auth').style.backgroundColor = 'red'
            setTimeout(() => { alert('Веддіть логін і пароль вірно!') }, 500);
            return false
        }
        return true
    }
   
}