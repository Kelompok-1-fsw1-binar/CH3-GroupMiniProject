const fs = require('fs');

// Path untuk log.txt
const logFilePath = ('./log.txt');

// Function untuk membaca isi dari log.txt
function readLogFile() {
  const data = fs.readFileSync(logFilePath, 'utf8');
  const logEntries = data.split('\n');
  logEntries.forEach(entry => {
    console.log(`${entry}`);
  });
}

readLogFile();