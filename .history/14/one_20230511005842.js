
window.onload = () => {
    let users = []
    axios
        .get(' https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            
        
            for (let i = 0; i < response.data.length; i++) {
                users.push(response.data[i])
            }

            for (let j = 0; j < users.length; j++) {
                let card = document.createElement('div')
                card.classList.add('card-body')
                let cardName = document.createElement('div')
                let email = document.createElement('div')
                let phone = document.createElement('div')
                let website = document.createElement('div')
                
                cardName.classList.add('.card-title')
                email.classList.add('.card-text')
                phone.classList.add('.card-text')
                website.classList.add('.card-text')
               
           
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