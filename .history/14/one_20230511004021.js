
window.onload = () => {
    let users = []
    axios
        .get(' https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            
            console.log(response.data);
            users.push(response.data)
            console.log(users)
        })
        .catch((error) => {
            console.log(error)
        })
    
   
}