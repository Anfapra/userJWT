//Importaciones
const mysql = require('mysql');

//Configuraciones
const mysqlConnection = mysql.createConnection({
    host: "",
    user: "root",
    password: "password",
    database: ""
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