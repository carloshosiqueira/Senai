const express = require("express");
const router = express.Router();

const Destinos = require('./controllers/destinos');
const Hoteis = require('./controllers/hoteis');
const Turistico = require('./controllers/turistico');

router.get('/', (req, res) => {
    res.send('Hello world');
});

router.get('/destinos', Destinos.read);
router.post('/destinos/nome', Destinos.readByNome);
router.post('/destinos', Destinos.create);
router.delete('/destinos/:id', Destinos.del);
router.put('/destinos/:id', Destinos.update);

router.get('/turisticos', Turistico.read);
router.post('/turisticos/nome', Turistico.readByNome);
router.post('/turisticos', Turistico.create);
router.delete('/turisticos/:id', Turistico.del);
router.put('/turisticos/:id', Turistico.update);

router.get('/hoteis', Hoteis.read);
router.post('/hoteis/nome', Hoteis.readByNome);
router.post('/hoteis', Hoteis.create);
router.delete('/hoteis/:id', Hoteis.del);
router.put('/hoteis/:id', Hoteis.update);

module.exports = router;
