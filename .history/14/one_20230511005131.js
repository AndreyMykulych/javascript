
window.onload = () => {
    let users = []
    axios
        .get(' https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            
            console.log(response.data[0].name);
            for (let i = 0; i < response.data.length; i++) {
                users.push(response.data[i])
            }
            let cardName = document.querySelector('.card-title')
            let email = document.querySelector('.email')
            let phone = document.querySelector('.phone')
            let website = document.querySelector('.website')
           
            cardName.innerHTML = `${users[0].name}`
            email.innerHTML = `${users[0].email}`
            phone.innerHTML = `${users[0].phone}`
            website.innerHTML = `${users[0].website}`
        })
        .catch((error) => {
            console.log(error)
        })
   
}