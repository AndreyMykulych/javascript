
window.onload = () => {
    let users = []
    axios
        .get(' https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            let usersArray = users.map(() => {
               return response.data
           })
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error)
        })
    
   
}