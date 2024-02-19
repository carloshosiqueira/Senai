//Dependencias
const con = require("../connect/connect").con;

//Cria um novo item
const create = (req, res) => {
    let id = req.body.id;
    let nome = req.body.nome;
    let descricao = req.body.descricao;
    let valor = req.body.valor;
    let query = `INSERT INTO item(id, nome, descricao, valor) VALUES`;
    query += `('${id}', '${nome}', '${descricao}','${valor}');`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(400).json(err).end();
        } else {
            res.status(201).json(req.body).end();
        }
    });
}


//Mostra os itens
const read = (req, res) => {
    con.query("SELECT * FROM item ORDER BY id desc", (err, result) => {
        if(err)
            res.json(err);
        else
            res.json(result);
    });
}

//Atualiza um item
const update = (req, res) => {
    let id = req.body.id;
    let nome = req.body.nome;
    let descricao = req.body.descricao;
    let valor = req.body.valor;
    let query = `UPDATE item SET nome = '${nome}', descricao = '${descricao}', valor = '${valor}' WHERE id = '${id}'`;
    con.query(query, (err, result) => {
        if(err) {
            res.status(400).json(err).end();
        } else {
            if(result.affectedRows > 0) {
                res.status(204).json(result).end();
            } else {
                res.status(404).json("Produto Não Encontrado").end();
            }
        }
    })
}



//Deleta um produto
const del = (req, res) =>{
    let id = req.body.id;
    con.query(`DELETE FROM item WHERE id = '${id}'`,(err, result) => {
        if(err)
            res.status(400).json(err).end();
        else{
            if(result.affectedRows > 0)
                res.status(204).json(result).end();
            else
                res.status(404).json("Produto não encontrado").end();
        }
    })
}

module.exports = {
    create,
    read,
    update,
    del
};