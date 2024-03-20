//Dependências - Frameworks
const express = require("express");
const router = express.Router();

const Tarefa = require("./controllers/tarefas");

//Rota de teste
const teste = (req, res) => {
    res.json("API tarefas respondendo!");
}

router.get('/', teste);

module.exports = router