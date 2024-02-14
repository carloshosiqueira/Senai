//Dependências - Frameworks
const express = require("express");
const router = express.Router();
const Cliente = require("./controllers/cliente");

//Rota de teste
const teste = (req, res) => {
    res.json("Back-end, API lojinha respondendo");
}

//Rotas de Saída - FrontEnd
router.get("/", teste);
router.post("/clientes", Cliente.create);
router.get("/clientes", Cliente.read);
router.put("/clientes/:id", Cliente.update);
router.delete("/clientes/:id", Cliente.del);

module.exports = router;