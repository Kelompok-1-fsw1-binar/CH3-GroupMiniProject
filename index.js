// Import modul Axios
const axios = require('axios');

// URL dari external API yang akan kita consume
const apiUrl = 'https://reqres.in/api/users';

// Menggunakan Axios untuk melakukan GET request ke API
axios.get(apiUrl)
    .then(response => {
        // Menggunakan data yang diterima dari API
        console.log('Data dari external API reqres.in users:');
        console.log(response.data);
    })
    .catch(error => {
        // Menangani kesalahan jika ada
        console.error('Error saat mengambil data dari API:', error);
    });


    
// // Mini Challange 1
// const math = require("./scripts/mini-task1");
// // Mini Challange 2
// const fs = require("fs");
// // Mini Challange 3
// const http = require("http");
// const port = 3000;
// const host = "localhost";
// // Mini Challange 4
// const axios = require("axios");

// // Mini Challange 1
// console.log("================================================\n");
// console.log("Mini Challange 2 : [Operasi Aritmatika Dasar]");
// console.log(`add 2 + 3 = ${math.add(2, 3)}`);
// console.log(`subtract 5 - 3 = ${math.subtract(5, 3)}`);
// console.log(`multiply 2 * 3 = ${math.multiply(2, 3)}`);
// console.log(`divide 6 / 3 = ${math.divide(6, 3)}`);

// // Mini Challange 2
// console.log("\n================================================\n");
// console.log("Mini Challange 2 : [Baca Log]");
// const bacaLog = fs.readFileSync("./scripts/log.txt", "utf-8");
// console.log({ bacaLog });

// // Mini Challange 3
// console.log("\n================================================\n");
// console.log("Mini Challange 3 : [Handle Request HTTP]");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Kelompok 1");
// });

// server.listen(port, host, () => {
//   console.log(`Server berjalan di http://${host}:${port}/`);
// });

// // Mini Challange 4
// const challange4 = () => {
//   console.log("\n================================================\n");
//   console.log("Mini Challange 4 : [Consume API With Axios]");
//   axios
//     .get("https://fakestoreapi.com/products")
//     .then((response) => {
//       console.log(response.data);
//     })
//     .catch((e) => {
//       // Menampilkan Error Jika Terjadi Masalah
//       console.log(e);
//     })
//     .finally(() => {
//       // Final Akan Selalu Di Eksekusi
//       console.log("done");
//     });
//   console.log("\n================================================");
// };

// const myTimeout = setTimeout(challange4, 2000);
