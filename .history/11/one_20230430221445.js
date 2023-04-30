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
    let startPrice = 110;
    priceA.innerHTML = `${startPrice} грн`
    priceB.innerHTML = `${startPrice +10} грн`
    priceC.innerHTML = `${startPrice+20} грн`
    inputS.onclick = (() => {
        if (inputS.checked) {
            inputM.checked = false
            inputL.checked = false
        }
        priceA.innerHTML = '110 грн'
        priceB.innerHTML = '120 грн'
        priceC.innerHTML = '130 грн'
    })
    inputM.onclick = (() => {
         if (inputM.checked) {
            inputS.checked = false
            inputL.checked = false
         }
         priceA.innerHTML = '130 грн'
         priceB.innerHTML = '140 грн'
         priceC.innerHTML = '150 грн'
    })
    inputL.onclick = (() => {
       
         if (inputL.checked) {
            inputS.checked = false
            inputM.checked = false
         }
         priceA.innerHTML = '150 грн'
         priceB.innerHTML = '170 грн'
         priceC.innerHTML = '190 грн'
    })

    let inputPizzaA = document.querySelector('.pizzaA')
    let inputPizzaB = document.querySelector('.pizzaB')
    let inputPizzaC = document.querySelector('.pizzaC')

    inputPizzaA.onclick = (() => {
        if (inputPizzaA.checked ) {
            inputPizzaB.checked = false
            inputPizzaC.checked = false
            
        }
       if (inputPizzaA.checked && inputS.checked) {
           total.innerHTML = `Total Price 110`
       }
      else if (inputPizzaA.checked && inputM.checked) {
        total.innerHTML = `Total Price 120`
       }
       else if (inputPizzaA.checked && inputL.checked) {
        total.innerHTML = `Total Price 130`
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
    
    formElPizza.onsubmit = (e) => {
        e.preventDefault();
        
        
       
    }

    return true
}