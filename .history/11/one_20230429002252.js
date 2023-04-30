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
  
    let priceA = document.querySelector('.priceA')
    let priceB = document.querySelector('.priceB')
    let priceC = document.querySelector('.priceC')
    inputS.onclick = (() => {
        if (inputS.checked) {
            inputM.checked = false
            inputL.checked = false
        }
        priceA.innerHTML = '110 грн'
        priceB.innerHTML = '120 грн'
        priceC.innerHTML = '130грн'
    })
    inputM.onclick = (() => {
         if (inputM.checked) {
            inputS.checked = false
            inputL.checked = false
         }
         priceA.innerHTML = '130 грн'
         priceB.innerHTML = '140 грн'
         priceC.innerHTML = '150грн'
    })
    inputL.onclick = (() => {
       
         if (inputL.checked) {
            inputS.checked = false
            inputM.checked = false
         }
         priceA.innerHTML = '150 грн'
         priceB.innerHTML = '170 грн'
         priceC.innerHTML = '190грн'
    })

    let inputPizzaA = document.querySelector('.pizzaA')
    let inputPizzaB = document.querySelector('.pizzaB')
    let inputPizzaC = document.querySelector('.pizzaC')

    inputPizzaA.onclick = (() => {
        if (inputPizzaA.checked ) {
            inputPizzaB.checked = false
            inputPizzaC.checked = false
            console.log('true')
        }
        if (inputPizzaA.checked) {
            console.log('yes')
        }
    })
    inputPizzaB.onclick = (() => {
         if (inputPizzaB.checked) {
            inputPizzaA.checked = false
            inputPizzaC.checked = false
        }
    })
    inputPizzaC.onclick = (() => {
       
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