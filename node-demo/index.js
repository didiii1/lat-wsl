const http = require('http');
const logger = require('./logger');
const port = 3000;

const server = http.createServer((req, res) => {
  logger.log('Ada permintaan masuk ke server!');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Halo Didi, Server Node.js di WSL Berhasil!');
});

server.listen(port, () => {
  console.log('Server running at http://localhost:' + port);
});
