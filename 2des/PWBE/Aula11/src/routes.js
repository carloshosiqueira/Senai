const express = require("express");

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello world');
});

const Cliente = require('./controllers/clientes')
const Telefone = require('./controllers/telefone')

router.get('/clientes', Cliente.read)
router.get('/clientes/:id', Cliente.readById)
router.post('/clientes/nome', Cliente.readByName)
router.post('/clientes', Cliente.create);
router.put('/clientes/:id', Cliente.update);
router.delete('/clientes/:id', Cliente.del);

router.get('/telefones', Telefone.read)
router.post('/telefones', Telefone.create);
router.put('/telefones/:id', Telefone.update);
router.delete('/telefones/:id', Telefone.del);

module.exports = router;