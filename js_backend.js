const http = require('http');
const fs = require('fs')
const connection = require('./conectiondb')



const server = http.createServer((req, res) => {
    if (req.url === '/') {
      fs.readFile('index.html', 'utf8', (err, content) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error interno del servidor');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content);
        }
      });
    } 
    else if (req.url === '/select'){
        
        // simple query
        connection.query('SELECT * FROM usuarios;',(err, rows) => {
              if(err){
                res.end('Error en el servidor')
              }
              else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(rows))
              }
        });
        
    }

    else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Página no encontrada');
    }
  });


  // get the client
  const PORT = 3000;
  server.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${PORT}/`);
});