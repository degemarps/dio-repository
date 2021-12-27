const http = require('http');
const host = 'http://localhost';
const port = 3100;

http.createServer((req, res) => {
  res.end('<h1>Working!<h1/>');
}).listen(port, () => console.log(`Server is running in ${host}:${port}`));