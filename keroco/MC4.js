const axios = require('axios');

axios.get('https://api.github.com/users/mapbox')
.then(response => {
    console.log(response.data);
})
.catch(error => {
    console.log(error)
})