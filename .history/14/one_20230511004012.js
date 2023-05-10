
window.onload = () => {
    let users = []
    axios
        .get(' https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            
            console.log(response.data);
            users.push(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    
   
}