window.onload = () => {
    let formElLoggin = document.querySelector('.auth');
    let formElPizza = document.querySelector('.pizzaForm');
    
    let btnSubmit = document.querySelector('.submit')
   formElLoggin.onsubmit = (e) => {
        
       let login = formElLoggin.elements.login.value;
       let password = formElLoggin.elements.password.value;
       e.preventDefault()

        if (login.length === 0 || password.length === 0) {
            document.querySelector('.auth').style.backgroundColor = 'red'
            setTimeout(() => { alert('Веддіть логін і пароль вірно!') }, 500);
            
            return false
        }
        else if (login !== 'user' && password !== '123456') {
            document.querySelector('.auth').style.backgroundColor = 'red'
            setTimeout(() => { alert('Веддіть логін і пароль вірно!') }, 500);
            
            return false;
            
            
        }
        
        else if (login === 'user' && password === '123456'){
            document.querySelector('.auth').style.display = 'none'
            document.querySelector('.pizzaForm').style.display = 'block'
            return true
        }   
    }
    let inputS = document.querySelector('.S')
    let inputM = document.querySelector('.M')
    let inputL = document.querySelector('.L')
    let total = document.querySelector('.total')
    let totalPrice = 0;

    inputS.onclick = (() => {
        if (inputS.checked) {
            inputM.checked = false
            inputL.checked = false
        }
    })
    inputM.onclick = (() => {
         if (inputM.checked) {
            inputS.checked = false
            inputL.checked = false
        }
    })
    inputL.onclick = (() => {
       
         if (inputL.checked) {
            inputS.checked = false
            inputM.checked = false
        }
    })

    let inputPizzaA = document.querySelector('.pizzaA')
    let inputPizzaB = document.querySelector('.pizzaB')
    let inputPizzaC = document.querySelector('.pizzaC')

    inputPizzaA.onclick = (() => {
        if (iinputPizzaA.checked) {
            inputPizzaB.checked = false
            inputPizzaC.checked = false
        }
    })
    inputPizzaB.onclick = (() => {
         if (inputPizzaB.checked) {
            inputPizzaA.checked = false
            inputPizzaC.checked = false
        }
    })
    inputL.onclick = (() => {
       
         if (inputPizzaC.checked) {
            inputPizzaB.checked = false
            inputPizzaA.checked = false
        }
    })

    total.innerHTML = `Total Price ${totalPrice}`
    formElPizza.onsubmit = (e) => {
        e.preventDefault();
        
        
       
    }

    return true
}