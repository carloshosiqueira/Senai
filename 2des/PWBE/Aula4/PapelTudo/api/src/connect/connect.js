//Dependencia
const mysql = require("mysql");

//Criando conexão
const con = mysql.createConnection({
    user: "root",
    host: "localhost",
    database: "inventario"
})

module.exports = { con }