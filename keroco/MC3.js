const http = require('http')
const hostname = '127.0.0.1';
const port = 8080;

const serve = http.createServer((req, res) => {
    res.write('Pz IV');
    res.end()
});

serve.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});