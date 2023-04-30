window.onload = () => {
    let formElLoggin = document.querySelector('.auth');
    let formElPizza = document.querySelector('.pizzaForm');
    let glovoForm = document.querySelector('.glovoForm')
    
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
            document.querySelector('.pizzaForm').style.display = 'flex'
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
        priceA.innerHTML = `${startPrice} грн`
        priceB.innerHTML = `${startPrice +10} грн`
        priceC.innerHTML = `${startPrice+20} грн`
    })
    inputM.onclick = (() => {
         if (inputM.checked) {
            inputS.checked = false
            inputL.checked = false
         }
         priceA.innerHTML = `${startPrice +20} грн`
         priceB.innerHTML = `${startPrice +30} грн`
         priceC.innerHTML = `${startPrice+40} грн`
    })
    inputL.onclick = (() => {
       
         if (inputL.checked) {
            inputS.checked = false
            inputM.checked = false
         }
         priceA.innerHTML = `${startPrice +40} грн`
         priceB.innerHTML = `${startPrice +60} грн`
         priceC.innerHTML = `${startPrice+80} грн`
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
           total.innerHTML = `Total Price ${startPrice}`
           document.querySelector('.pizzaForm').style.backgroundColor = 'green'
           document.querySelector('.submitBtn').removeAttribute('disabled')
       }
      else if (inputPizzaA.checked && inputM.checked) {
           total.innerHTML = `Total Price ${startPrice + 20}`
           document.querySelector('.pizzaForm').style.backgroundColor = 'green'
           document.querySelector('.submitBtn').removeAttribute('disabled')
       }
       else if (inputPizzaA.checked && inputL.checked) {
           total.innerHTML = `Total Price ${startPrice + 40}`
           document.querySelector('.pizzaForm').style.backgroundColor = 'green'
           document.querySelector('.submitBtn').removeAttribute('disabled')
           console.log('yes')
    }
    })
    inputPizzaB.onclick = (() => {
         if (inputPizzaB.checked) {
            inputPizzaA.checked = false
            inputPizzaC.checked = false
         }
         if (inputPizzaB.checked && inputS.checked) {
             total.innerHTML = `Total Price ${startPrice + 10}`
             document.querySelector('.pizzaForm').style.backgroundColor = 'green'
             document.querySelector('.submitBtn').removeAttribute('disabled')
        }
       else if (inputPizzaB.checked && inputM.checked) {
             total.innerHTML = `Total Price ${startPrice + 30}`
             document.querySelector('.pizzaForm').style.backgroundColor = 'green'
             document.querySelector('.submitBtn').removeAttribute('disabled')
        }
        else if (inputPizzaB.checked && inputL.checked) {
             total.innerHTML = `Total Price ${startPrice + 60}`
             document.querySelector('.pizzaForm').style.backgroundColor = 'green'
             document.querySelector('.submitBtn').removeAttribute('disabled')
            console.log('yes')
     }
    })
    inputPizzaC.onclick = (() => {
       
         if (inputPizzaC.checked) {
            inputPizzaB.checked = false
             inputPizzaA.checked = false
         }
         if (inputPizzaC.checked && inputS.checked) {
             total.innerHTML = `Total Price ${startPrice + 20}`
             document.querySelector('.pizzaForm').style.backgroundColor = 'green'
    
             document.querySelector('.submitBtn').removeAttribute('disabled')
        }
       else if (inputPizzaC.checked && inputM.checked) {
             total.innerHTML = `Total Price ${startPrice + 40}`
             document.querySelector('.pizzaForm').style.backgroundColor = 'green'
    
             document.querySelector('.submitBtn').removeAttribute('disabled')
        }
        else if (inputPizzaC.checked && inputL.checked) {
             total.innerHTML = `Total Price ${startPrice + 80}`
             document.querySelector('.pizzaForm').style.backgroundColor = 'green'
    
             document.querySelector('.submitBtn').removeAttribute('disabled')
            console.log('yes')
     }
    })
    formElPizza.onsubmit = () => {
        e.preventDefault();
        document.querySelector('.pizzaForm').style.display = 'none'
        document.querySelector('.glovoForm').style.display = 'block'
        
        return true
    }
    
}