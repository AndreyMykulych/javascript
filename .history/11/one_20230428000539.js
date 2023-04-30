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
    total.innerHTML = `Total Price ${totalPrice}`
    formElPizza.onsubmit = (e) => {
       
        e.preventDefault();
        
        
        if (inputS.checked) {
            alert('S')
        }
        if (inputM.checked) {
            alert('M')
        }
        if (inputL.checked) {
            alert('L')
        }
    }
    return true
}