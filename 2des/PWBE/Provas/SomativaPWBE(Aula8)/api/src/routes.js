const express = require ('express');
const routes = express.Router();

const Cliente = require('./controllers/cliente');
const Telefone = require('./controllers/telefone');
const Veiculo = require('./controllers/veiculo');
const Aluguel = require('./controllers/aluguel');

routes.get('/', (req, res) => {
    res.json("API prova somativa respondendo");
});

routes.get('/clientes', Cliente.readCliente);
routes.get('/clientes/:cpf', Cliente.readCliente);
routes.post('/clientes', Cliente.addCliente);
routes.put('/clientes', Cliente.updateCliente);
routes.delete('/clientes/:cpf', Cliente.deleteCliente);

routes.get('/telefones', Telefone.readTelefone);
routes.get('/telefones/:cpf', Telefone.readTelefone);
routes.post('/telefones', Telefone.addTelefone);
routes.put('/telefones/', Telefone.updateTelefone);
routes.delete('/telefones/:numero', Telefone.deleteTelefone);

routes.get('/veiculos', Veiculo.readVeiculo);
routes.get('/veiculos/:placa', Veiculo.readVeiculo);
routes.post('/veiculos', Veiculo.addVeiculo);
routes.put('/veiculos', Veiculo.updateVeiculo);
routes.delete('/veiculos/:placa', Veiculo.deleteVeiculo);

routes.get('/alugueis', Aluguel.readAluguel);
routes.get('/alugueis/:id', Aluguel.readAluguel);
routes.get('/reservados', Aluguel.readReservados);
routes.get('/alugados', Aluguel.readAlugados);
routes.post('/alugueis', Aluguel.addAluguel);
routes.put('/alugueis', Aluguel.updateAluguel);
routes.delete('/alugueis/:id', Aluguel.deleteAluguel);

module.exports = routes;