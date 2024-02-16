const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser")

//Con = Conexão
const con = mysql.createConnection({
    user: "root",
    host: "localhost",
    database: "treinamento"
});

//Testar se o backend funciona
const teste = (req,res) => {
    res.send("Back-end respondendo")
}

//Crud Createa

const create = (req,res) => {
    let cpf = req.body.cpf;
    let nome = req.body.nome;
    let sobrenome = req.body.sobrenome;
    let idade = req.body.idade;
    let genero = req.body.genero;
    let requisicao = `INSERT INTO pessoas (cpf, nome, sobrenome, idade, genero) VALUE`;
    requisicao += `('${cpf}', '${nome}', '${sobrenome}', '${idade}', '${genero}');`;
    con.query(requisicao,(err,result)=>{
        if(err)
            res.redirect('http://localhost:5500/front/erro.html');
        else
            res.redirect('http://localhost:5500/front/lista.html');
    });
}

const read = (req, res) => {
    con.query("SELECT * FROM pessoas ORDER BY id desc",(err, result) => {
        if(err)
            res.json(err);
        else
            res.json(result);
    })
}

//Configurações de saida
const app = express();
app.use(express.json()) ;//Não entendi o .json
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));


//Rotas de Saída

app.get("/",teste)
app.post("/pessoas", create)
app.get("/pessoas", read)

//Console tudo só funciona depois do listen?
app.listen(3000, () => {
    console.log("Backend respondendo na porta 3000")
})
