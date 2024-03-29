//Dependências - Frameworks
const express = require("express");
const router = express.Router();

const Tarefa = require("./controllers/tarefas");
const Usuario = require('./controllers/usuarios')

//Rota de teste
const teste = (req, res) => {
    res.json("API gerenciamentro de tarefas respondendo!");
}

router.get('/', teste);

router.post('/tarefas', Tarefa.addTarefa)
router.get('/tarefas', Tarefa.getTarefa)
router.get('/tarefas/:id', Tarefa.getTarefa)
router.put('/tarefas', Tarefa.updateTarefa)
router.delete('/tarefas/:id', Tarefa.deleteTarefa)

router.post('usuarios/login', Usuario.login) // Dando erro 404
router.post('/usuarios', Usuario.addUsuario)
router.get('/usuarios', Usuario.getUsuario)
router.get('/usuarios/:id', Usuario.getUsuario)
router.put('/usuarios', Usuario.updateUsuario)
router.delete('/usuarios/:id', Usuario.deleteUsuario)


module.exports = router