import axios from 'axios'

    
    const axios = require('axios');

    
    axios.get(' https://jsonplaceholder.typicode.com/users')
    .then( function (response) {
      console.log(response.data);
    })
        .catch((error) => {
        console.log(error)
    })
    
