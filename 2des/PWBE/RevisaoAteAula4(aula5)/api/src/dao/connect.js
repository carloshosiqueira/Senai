const mysql = require("mysql");

const con = mysql.createConnection({
    user: "root",
    host: "database",
    database: "inventario"
})

module.exports = con;