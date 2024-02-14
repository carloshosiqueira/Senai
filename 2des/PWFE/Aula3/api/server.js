//Dependências - Frameworks
const express = require("express");
const cors = require("cors");
const routes = require("./src/routes")

//Configurações de saída - FrontEnd
const app = express();
app.use(express.json());
app.use(routes)
app.use(cors());

//Teste e porta no console
app.listen(3000, () => {
    console.log("Back-end respondendo na porta 3000");
});