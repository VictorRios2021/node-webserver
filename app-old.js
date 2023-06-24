const http = require('http');

http.createServer((req, res) => {

    // res.writeHead(201, { 'Content-Type': 'text/plain'})

     res.write('Hola mundo')
     res.end();
})
.listen( 8080);

console.log('escuchando en el puerto', 8080)
