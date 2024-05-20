const express = require('express');
const cors = require('cors');
const routes = require('./src/routes')

const app = express()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3000, () => {
    console.log("API respondendo na porta 3000")
})