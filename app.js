// Import modul Axios
const axios = require('axios');

// URL dari external API yang akan kita consume
const apiUrl = 'https://reqres.in/api/users';

// Menggunakan Axios untuk melakukan GET request ke API
axios.get(apiUrl)
    .then(response => {
        // Menggunakan data yang diterima dari API
        console.log('Data dari external API:');
        console.log(response.data);
    })
    .catch(error => {
        // Menangani kesalahan jika ada
        console.error('Error saat mengambil data dari API:', error);
    });
