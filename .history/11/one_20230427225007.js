window.onload = () => {
    let formElLoggin = document.querySelector('.auth');
    let formElPizza = document.querySelector('.pizzaForm');

    formElLoggin.onsubmit = (e) => {
        let login = document.querySelector("#login")
        let password = document.querySelector("#password")
 console.log(e)
      alert(password.value)
        
    }
}