const express = require('express');
const routes = express.Router();

const Cliente = require('./controllers/cliente');
const Veiculo = require('./controllers/veiculo');
const Entrega = require('./controllers/entrega')

routes.get('/', (req, res) => {
    res.json("API Transportadora XPTO 1.0")
});

routes.post('/clientes', Cliente.addCliente);
routes.get('/clientes', Cliente.getClientes);
routes.get('/clientes/:id', Cliente.getClientes);
routes.put('/clientes', Cliente.updateCliente);
routes.delete('/clientes/:id', Cliente.deleteCliente);

routes.post('/entregas', Entrega.addEntrega);
routes.get('/entregas', Entrega.getEntrega);
routes.get('/entregas/:id', Entrega.getEntrega); //não funciona
routes.put('/entregas', Entrega.updateEntrega); //Mensagem de sucesso porem não troca os dados
routes.delete('/entregas/:id', Entrega.deleteEntrega);

routes.post('/veiculos', Veiculo.addVeiculo);
routes.get('/veiculos', Veiculo.getVeiculos);
routes.get('/veiculos/:placa', Veiculo.getVeiculos);
routes.put('/veiculos', Veiculo.updateVeiculo);
routes.delete('/veiculos/:placa', Veiculo.deleteVeiculo);

module.exports = routes;