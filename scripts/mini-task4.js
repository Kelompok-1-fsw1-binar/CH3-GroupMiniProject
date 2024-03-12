const axios = require('axios');

// API key The Dog API
const apiKey = 'live_T2R54FKh81CjiRWvUceyK7Z5w4VZ6ghjE0YZyIAStJyoVUWRzF5h6nYg4xrVlOlx';

// URL API The Dog API untuk mendapatkan daftar semua jenis anjing
const apiUrl = 'https://api.thedogapi.com/v1/breeds';

// Melakukan permintaan ke API menggunakan Axios
axios.get(apiUrl, {
  headers: {
    'x-api-key': apiKey
  }
})
  .then(response => {
    // Mengakses data dari respons
    const breeds = response.data;
    console.log('Daftar Jenis Anjing:');
    breeds.forEach(breed => {
      console.log(`- ${breed.name}`);
    });
  })
  .catch(error => {
    // Menangani kesalahan jika permintaan gagal
    console.error('Error saat melakukan permintaan ke API:', error);
  });
