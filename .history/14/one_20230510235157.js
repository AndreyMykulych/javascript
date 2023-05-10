window.onload = () => {
    const axios = require('axios');

    const getUsers = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(response => {
            return console.log(response.data)
        })
    }
}