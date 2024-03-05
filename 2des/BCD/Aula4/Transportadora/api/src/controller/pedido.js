//Dependências - Frameworks
const con = require('../connect/connect');

//CRUD - create
const create = (req, res) => {
    let idCliente = req.body.idCliente;
    let idEntrega = req.body.idEntrega;
    let dataPedido = req.body.dataPedido;
    let valor = req.body.valor;
    let query = `INSERT INTO Pedido (idCliente, idEntrega, dataPedido, valor) VALUE`;
    query += `('${idCliente}', '${idEntrega}', '${dataPedido}', '${valor}');`;
    con.query(query, (err, result) => {
        if (err)
            res.status(400).json(err).end();
        else {
            const novo = req.body;
            novo.idPedido = result.insertidPedido;
            res.status(201).json(novo).end();
        }
    });
}

//CRUD - Read
const read = (req, res) => {
    con.query("SELECT * FROM Pedido ORDER BY idPedido DESC", (err, result) => {
        if (err)
            res.json(err);
        else
            res.json(result);
    });
}

//CRUD - Update
const update = (req, res) => {
    let idPedido = req.params.idPedido;
    let idCliente = req.body.idCliente;
    let idEntrega = req.body.idEntrega;
    let dataPedido = req.body.dataPedido;
    let valor = req.body.valor;
    let query = `UPDATE Pedido SET idCliente = '${idCliente}', idEntrega = '${idEntrega}', dataPedido = '${dataPedido}', valor = '${valor}' WHERE idPedido = ${idPedido}`;
    con.query(query, (err, result) => {
        if (err)
            res.status(400).json(err).end();
        else {
            if (result.affectedRows > 0)
                res.status(202).json(req.body).end();
            else
                res.status(404).json("Registro não encontrado").end();
        }
    });
}

//CRUD - Delete
const del = (req, res) => {
    let idPedido = req.params.idPedido;
    con.query(`DELETE FROM Pedido WHERE idPedido = ${idPedido}`, (err, result) => {
        if (err)
            res.status(400).json(err).end();
        else {
            if (result.affectedRows > 0)
                res.status(204).json(result).end();
            else
                res.status(404).json("Registro não encontrado").end();
        }
    });
}

module.exports = {
    create,
    read,
    update,
    del
};