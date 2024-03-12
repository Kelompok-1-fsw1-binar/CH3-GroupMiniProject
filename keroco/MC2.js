const fs = require('fs');
const readData = fs.readFileSync("txt/log.txt", 'utf8');
console.log(readData);
