//Importaciones
const express = require('express');
const userRouter = require('./views/users.js')

//Configuraciones
const app = express();
let port = 3000;

//Middleware
app.use(express.json());

//Router
app.get(userRouter);

//Listen
app.listen(port, ()=>{
    console.log(`Aplicación funcionando en http://localhost:${port}/`)
});