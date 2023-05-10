
window.onload = () => {
    let users = []
    axios
        .get(' https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            
            console.log(response.data[1]);
        })
        .catch((error) => {
            console.log(error)
        })
    
   
}