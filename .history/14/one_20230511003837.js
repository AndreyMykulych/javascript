

window.onload = () => {
    let users = []
    axios
        .get(' https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            return console.log(response.data[i])
           })
            console.log(usersArray);
        })
        .catch((error) => {
            console.log(error)
        })
    
    
}