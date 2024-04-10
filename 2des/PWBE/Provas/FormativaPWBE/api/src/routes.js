const express = require('express');
const routes = express.Router();

const Veiculo = require('./controllers/veiculo');
const Funcionario = require('./controllers/funcionario');
const Telefone = require('./controllers/telefone');
const Manutencao = require('./controllers/manutencao');

routes.get('/', (req, res) => {
    res.json("API Manutenções 1.0");
});

routes.post('/veiculos', Veiculo.addVeiculo);
routes.get('/veiculos', Veiculo.readVeiculos);
routes.get('/veiculos/:placa', Veiculo.readVeiculo);
routes.put('/veiculos', Veiculo.updateVeiculo);
routes.delete('/veiculos', Veiculo.deleteVeiculo);


routes.post('/funcionarios', Funcionario.addFuncionario)
routes.get('/funcionarios', Funcionario.readFuncionarios)
routes.get('/funcionarios/:matricula', Funcionario.readFuncionarios)
routes.put('/funcionarios', Funcionario.updateFuncionario)
routes.delete('/funcionarios/:matricula', Funcionario.deleteFuncionario)

routes.post('/manutencao', Manutencao.addManutencao)
routes.get('/manutencao', Manutencao.readManutencoes)
routes.get('/manutencao/:id', Manutencao.readManutencoes)
routes.put('/manutencao', Manutencao.updateManutencao)
routes.delete('/manutencao/:id', Manutencao.deleteManutencao)

routes.post('/telefones', Telefone.addTelefone)
routes.get('/telefones', Telefone.readTelefones)
routes.get('/telefones/:matricula', Telefone.readTelefones)
routes.put('/telefones', Telefone.updateTelefone)
routes.delete('/telefones/:numero', Telefone.deleteTelefone)


module.exports = routes;