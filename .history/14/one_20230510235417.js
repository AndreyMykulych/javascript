
    const axios = require('axios');

    
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(response => {
            return console.log(response.data)
        })
    
