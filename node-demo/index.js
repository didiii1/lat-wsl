const http = require('http');
const logger = require('./logger');
const utils = require('./utils'); // Import utils baru
const port = 3000;

const server = http.createServer((req, res) => {
  logger.log('Ada permintaan masuk!');
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html'); // Ganti ke HTML biar rapi
  
  const pesan = utils.sapaUser('Didi');
  const waktu = utils.formatWaktu();
  
  res.end(`
    <h1>${pesan}</h1>
    <p>Server diakses pada: <strong>${waktu}</strong></p>
  `);
});

server.listen(port, () => {
  console.log('Server running at http://localhost:' + port);
});
