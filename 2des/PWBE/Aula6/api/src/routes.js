//Dependências - Frameworks
const express = require("express");
const router = express.Router();

const Tarefa = require("./controllers/tarefas");
const Usuario = require('./controllers/usuarios')

//Rota de teste
const teste = (req, res) => {
    res.json("API tarefas respondendo!");
}

router.get('/', teste);

router.get('/tarefas', Tarefa.getTarefa)
router.get('/tarefas/:id', Tarefa.getTarefa)
router.put('/tarefas', Tarefa.updateTarefa)
router.post('/tarefas', Tarefa.addTarefa)
router.delete('/tarefas/:id', Tarefa.deleteTarefa)

router.get('/Usuarios', Usuario.getUsuario)
router.get('/Usuarios/:id', Usuario.getUsuario)
router.put('/Usuarios', Usuario.updateUsuario)
router.post('/Usuarios', Usuario.addUsuario)
router.delete('/Usuarios/:id', Usuario.deleteUsuario)


module.exports = router