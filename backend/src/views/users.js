//Importaciones
const express = require('express');
const router = express.Router();
const dbConnection = require('../connection.js');
const jwt = require('jsonwebtoken');
const someSalt = require('../someSalt.json')

//Vistas
router.post('/singUp', (req, res) => {
    //Datos cliente
    const {username, password} = req.body;
    //Cifrar contraseña
    jwt.sign({password: password}, someSalt["sal"], (err, token)=>{
        let password =  token
        //Query
        const query = "INSERT INTO users(username, password) VALUES(?,?)"
        //Enviar datos a la BD
        dbConnection.query(query, [username, password], (err)=>{
            if(!err){
                res.json({status: "200"})
            }else{
                if(err.errno == 1062){
                    res.json({status: "409"})
                }else{
                    console.log(err)
                    res.json({status: "400"})
                }
            }
        })
    })
});

router.post('/login', (req, res) => {
    //Datos cliente
    const {username, password} = req.body;
    //Obtener datos de base de datos para validar clave
    const query = "SELECT password FROM users WHERE username=?"
    dbConnection.query(query, [username], (err, row) => {
        if(!err){
            let dbPassword = jwt.verify(row[0]['password'], someSalt['sal'])['password'];
            if(dbPassword == password){
                res.json("Contraseña Correcta")
            }else{
                res.json({"status": 403})
            }
        }
    })

})
router.get('/users', (req, res) => {
    dbConnection.query('SELECT * FROM users', (err, rows, fields) =>{
        if(!err){
            res.json(rows);
            res.status(200)
        }else{
            console.log(err);
            res.status(401)
        }
    })
})

//Exportaciones
module.exports = router;