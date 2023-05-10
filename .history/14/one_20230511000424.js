import * as axios from 'axios'

    
    axios.get(' https://jsonplaceholder.typicode.com/users')
    .then( function (response) {
      console.log(response.data);
    })
        .catch((error) => {
        console.log(error)
    })
    
