//Importaciones
const mysql = require('mysql');

//Configuraciones
const mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "userjwt"
});

mysqlConnection.connect( (err) => {
    if(err){
        console.log(err);
        return;
    } else{
        console.log('Base de datos conectada')
    }
})

//Exportaciones
module.exports = mysqlConnection;