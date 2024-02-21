//Dependencias
const express = require("express");
const router = express.Router();

const Produto = require("./controllers/item");

//Rota para teste de conexão entre api e frontend
const teste = (req, res) => {
    res.send("Backend, API da papelaria funcionando na rota 3000");
}

//Rotas de saída

router.get("/", teste);
router.post("/item", Produto.create);
router.get("/item", Produto.read);
router.put("/item/:id", Produto.update);
router.delete("/item/:id", Produto.del)

module.exports = router;