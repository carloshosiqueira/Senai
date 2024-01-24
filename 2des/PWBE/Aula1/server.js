// Dependencias - Frameworks
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

//Conexão com SGBD mysql
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'lojinha'
});

// Rota de teste
const teste = (req, res)=>{
    res.send("Back-End respondendo ");
}


// Crud Read
const read = (req, res)=>{
    con.query("select * from Clientes", (err, result)=>{
        if(err)
            res.json(err);
        else
            res.json(result);
    });
}

// Configuração de saida - Frontend
const app = express();
app.use(express.json());
app.use(cors());

//Rotas de Saída - FrontEnd
app.get ("/", teste);
app.get("/clientes", read);

// Teste e porta no console
app.listen(3000, ()=>{
    console.log("Back-end respondendo na porta 3000");
})

