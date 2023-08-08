const http = require('http');
const fs = require('fs')
const mysql = require('mysql2');
require('dotenv').config()

const connection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});


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
    else if (req.url === '/holamundo'){
        
        // simple query
        connection.query('SELECT * FROM usuarios;',
            function(err, rows) {
                const usuarios = rows.map(row => `<li>${row.nombre} - ${row.edad}</li>`);
                const content = 
                `<html>
                    <head><title>Usuarios</title></head>
                    <body>
                    <h1>Lista de Usuarios</h1>
                    <ul>${usuarios}</ul>
                    </body>
                </html>`;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
        connection.end()
        
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