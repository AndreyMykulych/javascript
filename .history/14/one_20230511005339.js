
window.onload = () => {
    let users = []
    axios
        .get(' https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            
        
            for (let i = 0; i < response.data.length; i++) {
                users.push(response.data[i])
            }

            for (let j = 0; j < users.length; j++) {
                let cardName = document.querySelector('.card-title')
                let email = document.querySelector('.email')
                let phone = document.querySelector('.phone')
                let website = document.querySelector('.website')
           
                cardName.innerHTML = `${users[j].name}`
                email.innerHTML = `${users[j].email}`
                phone.innerHTML = `${users[j].phone}`
                website.innerHTML = `${users[j].website}`
            }
        })
        .catch((error) => {
            console.log(error)
        })
   
}