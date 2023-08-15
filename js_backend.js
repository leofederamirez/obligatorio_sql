const http = require('http');
const fs = require('fs')
const connection = require('./conectiondb')
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

//esta expresion le fice al navegador que la carpeta estatica del a la que el frontend tiene acceso sea la carpeta public
app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.json())



//Esta exprecion le dice al cervido que si hay una peticiom del navegador queprocenga de estes ruta, enviale el archivo inex.html de la carpeta public
//el modulo PATH que sean compatibles las rutas en cualquier sispema operaticvo, y la fincion __dirname toma la URL en la que encuentra el archivo actualmente.
app.get('/', (req,res) => {
  console.log(req.body)
  res.sendFile(path.join(__dirname,'public','index.html'))
})


app.get('/select', (req,res) => {
  connection.query("SELECT * FROM usuarios;",(err, data)=> {
    if(err){
      console.log(err)
      res.end(`{"mensaje":"Todo mal loco"}`)
    } else {
      res.send(data)
      console.log(data) 
    }
  })
})

//aca lo mismo que lo anterir pero cambiando la url
app.get('/insert', (req,res) => {
  res.sendFile(path.join(__dirname,'public','insert.html'))
})

app.post('/query', (req,res) => {
  console.log(req.body)
  console.log("kasemaster")

  res.end(`{"mensaje" : "Usuario Resgitrado con Exito"}`)
  
})


app.listen(3000,() =>console.log(`Servidor en el puerto 3000`))

// // const server = http.createServer((req, res) => {
// //     if (req.url === '/') {
// //       fs.readFile('index.html','utf8' , (err, content) => {
// //         if (err) {
// //           res.writeHead(500, { 'Content-Type': 'text/plain' });
// //           res.end('Error interno del servidor');
// //         } else {
// //           res.writeHead(200, { 'Content-Type': 'text/html' });
// //           res.end(content);
// //         }
// //       });
// //     } 
// //     else if (req.url === '/insert'){
// //       console.log(req.server)
        
// //         // simple query
// //         connection.query('SELECT * FROM usuarios;',(err, rows) => {
// //               if(err){
// //                 res.end('Error en el servidor')
// //               }
// //               else {
// //                 res.writeHead(200, { 'Content-Type': 'application/json' });
// //                 res.end(JSON.stringify(rows))
// //                 console.log(rows)
// //                 connection.end()
// //               }
// //         });
        
// //     }

// //     else {
// //       res.writeHead(404, { 'Content-Type': 'text/plain' });
// //       res.end('Página no encontrada!!');
// //     }
// //   });


//   // get the client
//   const PORT = 3000;
//   server.listen(PORT, () => {
//     console.log(`Servidor en funcionamiento en http://localhost:${PORT}/`);
// });