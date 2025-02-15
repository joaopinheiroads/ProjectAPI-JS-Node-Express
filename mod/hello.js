import { createServer } from 'http';
const hostname = '127.0.0.1';   // localhost
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
}   );  

server.listen(port, hostname, () => {   // start the server
  console.log(`Server running at http://${hostname}:${port}/`);
});