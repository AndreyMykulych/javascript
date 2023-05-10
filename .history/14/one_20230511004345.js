
window.onload = () => {
    let users = []
    axios
        .get(' https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            
            console.log(response.data);
            for (let i = 0; i < response.data.length; i++) {
                users.push(response.data[i])
            }
            console.log(users)
        })
        .catch((error) => {
            console.log(error)
        })
    
    let cardName = document.querySelector('.card-title')
    let email = document.querySelector('.card-text')
   
}