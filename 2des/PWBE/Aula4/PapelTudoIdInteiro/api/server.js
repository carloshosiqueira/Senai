const cors = require("cors");
const express = require("express");
const routes = require("./src/routes");

//Configurações de saida - FrontEnd
const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

//Teste e porta no console
app.listen(3000, () => {
    console.log("API respondendo na rota 3000")
})