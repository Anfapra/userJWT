//Importaciones
const express = require('express');

//Configuraciones
const app = express();
let port = 3000;

//Middleware
app.use(express.json());

//Router
app.use(require('./views/users.js'));

//Listen
app.listen(port, ()=>{
    console.log(`Aplicación funcionando en http://localhost:${port}/`)
});